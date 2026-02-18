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
}
