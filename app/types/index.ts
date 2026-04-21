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

export interface ITag {
  id: number;
  title: string;
  parent_id: number;
  is_active: boolean;
  created_at: string;
}

export interface IShop {
  id: number;
  name: string;
  display_name: string;
  logo: string;
  category: IShopCategory;
  phone: string;
  website: string;
  type: number;
  wallet: {
    id: number;
    wallet_code: string;
  };
  tags: ITag[];
  description: string;
  additional_info: string;
  order: number;
  is_active: boolean;
  due_date_of_month: number;
  payment_day_of_month: number;
  is_fixed_installment: boolean;
  default_installment_count: number;
  max_installment_count: number;
  min_installment_count: number;
  installment_profit_percentage: string;
  created_at: string;
}

export interface IBranch {
  id: number;
  name: string;
  code: string;
  shop: IShop;
  city: {
    id: number;
    title: string;
    province: string;
  };
  address: string;
  website: string;
  latitude: number;
  longitude: number;
  phone: string;
  is_physical: boolean;
  is_active: boolean;
  meta: any;
  delivery_type: number;
  onsite_delivery_from: string;
  onsite_delivery_to: string;
  is_minikala: number;
}
