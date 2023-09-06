export interface PricingType {
  title: string;
  price: number;
  cycle: string;
}

const pricing: PricingType[] = [
  {
    title: 'Monthly Plan',
    price: 2000,
    cycle: 'Billed every 30 days',
  },
  {
    title: 'Quarterly Plan',
    price: 5000,
    cycle: 'Billed every 90 days',
  },
  {
    title: 'Yearly Plan',
    price: 20000,
    cycle: 'Billed every 365 days',
  },
];

export default pricing;
