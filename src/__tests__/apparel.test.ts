import { SmartApparelService } from '../lib/services/smartApparelService';
import { CreditService } from '../lib/services/creditService';

describe('AI Apparel Production Studio Core Services', () => {
  test('SmartApparelService correctly classifies FRONT view orientation', async () => {
    const result = await SmartApparelService.analyzeGarmentImage('https://example.com/front.jpg', 'front_tshirt.jpg');
    expect(result.orientation).toBe('FRONT');
    expect(result.orientation_confidence).toBeGreaterThan(0.9);
    expect(result.garment_category).toBe('T-shirt');
  });

  test('SmartApparelService correctly classifies BACK view orientation', async () => {
    const result = await SmartApparelService.analyzeGarmentImage('https://example.com/back.jpg', 'back_hoodie.jpg');
    expect(result.orientation).toBe('BACK');
    expect(result.garment_category).toBe('Hoodie');
  });

  test('CreditService calculates pack credit costs accurately', () => {
    expect(CreditService.calculateCreditCost('SINGLE', 'Standard')).toBe(1);
    expect(CreditService.calculateCreditCost('ESSENTIAL', 'Standard')).toBe(4);
    expect(CreditService.calculateCreditCost('ESSENTIAL', 'Premium')).toBe(6);
    expect(CreditService.calculateCreditCost('COMPLETE', 'Premium')).toBe(12);
  });
});
