export interface ProductAvailability {
  quantity: number;
  link?: string;
}

export interface Product {
  itemId: string;
  name: string;
  description: string;
  price: number;
  availability?: ProductAvailability;
}

export interface CoolstoreConfig {
  apiEndpoint: string;
  secureApiEndpoint: string;
  ssoEnabled: boolean;
}
