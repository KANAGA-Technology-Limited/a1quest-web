export type CountryType = {
  iso2: string;
  iso3: string;
  country: string;
  cities: string[];
};

export type StateType = {
  name: string;
  state_code: string;
};

export type TransactionType = {
  _id: string;
  owner: string;
  amount: number;
  reference: string;
  txnType: 'debit' | 'credit';
  txnName: string;
  status: 'pending' | 'failed' | 'successful';
  gateway: 'paystack' | 'flutterwave';
  createdAt: string;
};
