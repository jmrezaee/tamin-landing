export interface ICallbackUrl {
  callback_url: string;
}

export interface IShopCategory {
  id: number;
  name: string;
  display_name: string;
  logo: string;
  banner_image: string;
  target: string;
  type: string;
  description: string;
  is_active: boolean;
  order: number;
  created_at: string;
}

export interface IShop {
  id: number;
  name: string;
  code: string;
  display_name: string;
  logo: string;
  phone: string;
  website: string;
  type: string;
  is_visible: boolean;
  is_active: boolean;
  categories: IShopCategory[];
  description: string;
  created_at: string;
  updated_at: string;
}

export interface IBranch {
  id: number;
  name: string;
  code: string;
  lat: string;
  long: string;
  phone: string;
  is_visible: boolean;
  is_active: boolean;
  meta: any;
  shop: {
    id: number;
    name: string;
    code: string;
    display_name: string;
    logo: string;
    default_installment_count: number;
    max_installment_count: number;
    min_installment_count: number;
  };
  address: string;
  created_at: string;
  updated_at: string;
}
