export type UserType = {
  _id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  isVerified: boolean;
  acceptTermsAndConditions: boolean;
  verificationCode: string;
  verificationCodeExpires: string;
  resetCode: string;
  resetExpires: string;
  passwordChangedAt: string;
  classLevel: string;
  country: string;
  countryState: string;
  gender: string;
  school: string;
  guardianEmail: string;
  guardianFullName: string;
  reportToGuardian: string;
  goal: number;
  isNotFreezed: boolean;
};

export type UncertainObjectType = {
  [key: string]: any;
};
