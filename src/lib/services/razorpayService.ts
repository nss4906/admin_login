import { getAdminSupabase } from '@/lib/supabase';
import crypto from 'crypto';

export class RazorpayService {
  public static verifyWebhookSignature(
    bodyText: string,
    signature: string,
    secret: string
  ): boolean {
    if (!signature || !secret) return false;
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(bodyText)
      .digest('hex');

    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(signature)
    );
  }

  public static async processSubscriptionWebhook(eventPayload: any) {
    const { event, payload } = eventPayload;
    const adminClient = getAdminSupabase();

    if (event === 'subscription.charged' || event === 'payment.captured') {
      const paymentEntity = payload.payment?.entity;
      const userId = paymentEntity?.notes?.user_id;
      const planTier = paymentEntity?.notes?.plan_tier || 'PRO';

      if (userId) {
        // Grant credits safely server-side
        const creditsToGrant = planTier === 'STARTER' ? 100 : planTier === 'PRO' ? 350 : 1000;

        await adminClient.rpc('grant_credits_atomic', {
          p_user_id: userId,
          p_amount: creditsToGrant,
          p_description: `Subscription payment captured (${planTier})`,
        });
      }
    }
  }
}
