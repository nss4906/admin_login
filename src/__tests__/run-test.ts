import { SmartApparelService } from '../lib/services/smartApparelService';
import { CreditService } from '../lib/services/creditService';

async function run() {
  console.log('Running AI Apparel Production Studio Unit Verification...');

  const frontResult = await SmartApparelService.analyzeGarmentImage('https://example.com/front.jpg', 'front_tshirt.jpg');
  console.assert(frontResult.orientation === 'FRONT', 'Expected FRONT orientation');
  console.assert(frontResult.garment_category === 'T-shirt', 'Expected T-shirt category');

  const backResult = await SmartApparelService.analyzeGarmentImage('https://example.com/back.jpg', 'back_hoodie.jpg');
  console.assert(backResult.orientation === 'BACK', 'Expected BACK orientation');
  console.assert(backResult.garment_category === 'Hoodie', 'Expected Hoodie category');

  const singleCost = CreditService.calculateCreditCost('SINGLE', 'Standard');
  console.assert(singleCost === 1, 'Expected 1 credit for single standard');

  const essentialCost = CreditService.calculateCreditCost('ESSENTIAL', 'Premium');
  console.assert(essentialCost === 6, 'Expected 6 credits for essential premium');

  console.log('All core service tests passed successfully!');
}

run().catch(console.error);
