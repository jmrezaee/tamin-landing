export interface ICallbackUrl {
  callback_url: string;
}

export interface IRequestOtp {
  mobile: string;
  ttl: number;
}

export interface IRequestOtpInput {
  mobile: string;
}

export interface IConfirmOtp {
  token: string;
}

export interface IConfirmOtpInput {
  mobile: string;
  code: string;
}

export interface IMe {
  id: number;
  full_name: string;
  status: string;
  yaraneh_status: string;
  national_code: string;
  mobile: string;
  is_head: boolean;
  request_status: number;
  created_at: string;
  updated_at: string;
}

export interface IUserVerifyShahkarInput {
  national_code: string;
}

export interface IUserOracleInput {
  national_code: string;
}
