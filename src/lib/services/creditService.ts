import { PlanTier } from '@/types';

export const PLAN_CONFIGS = {
  FREE: {
    id: 'FREE',
    name: 'Free Trial',
    description: 'Explore AI Apparel Studio with trial credits',
    monthly_price: 0,
    monthly_credits: 5,
    max_resolution: '1024x1024',
    ai_quality: 'Fast',
    pack_access: ['SINGLE'],
    storage_limit_gb: 0.5,
    campaign_access: false,
    priority_generation: false,
  },
  STARTER: {
    id: 'STARTER',
    name: 'Starter',
    description: 'Perfect for single brands and POD sellers',
    monthly_price: 29,
    monthly_credits: 100,
    max_resolution: '2048x2048',
    ai_quality: 'Standard',
    pack_access: ['SINGLE', 'ESSENTIAL'],
    storage_limit_gb: 5,
    campaign_access: false,
    priority_generation: false,
  },
  PRO: {
    id: 'PRO',
    name: 'Pro Studio',
    description: 'For growing e-commerce stores & fashion brands',
    monthly_price: 79,
    monthly_credits: 350,
    max_resolution: '4096x4096',
    ai_quality: 'Premium',
    pack_access: ['SINGLE', 'ESSENTIAL', 'PLUS', 'SOCIAL'],
    storage_limit_gb: 25,
    campaign_access: true,
    priority_generation: true,
  },
  BUSINESS: {
    id: 'BUSINESS',
    name: 'Agency & Scale',
    description: 'High volume production for agencies & multi-brand studios',
    monthly_price: 199,
    monthly_credits: 1000,
    max_resolution: '4096x4096',
    ai_quality: 'Premium',
    pack_access: ['SINGLE', 'ESSENTIAL', 'PLUS', 'SOCIAL', 'COMPLETE'],
    storage_limit_gb: 100,
    campaign_access: true,
    priority_generation: true,
  },
} as const;

export class CreditService {
  /**
   * Calculates required credits based on generation request parameters.
   */
  public static calculateCreditCost(packType: string, qualityTier: string): number {
    let baseCredits = 1;

    switch (packType) {
      case 'ESSENTIAL':
        baseCredits = 4;
        break;
      case 'PLUS':
        baseCredits = 6;
        break;
      case 'SOCIAL':
        baseCredits = 4;
        break;
      case 'COMPLETE':
        baseCredits = 8;
        break;
      case 'SINGLE':
      default:
        baseCredits = 1;
        break;
    }

    if (qualityTier === 'Premium') {
      baseCredits = Math.round(baseCredits * 1.5);
    }

    return baseCredits;
  }
}
