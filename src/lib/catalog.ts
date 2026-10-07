import { Product } from '@/types';
import { getConfig } from './config';

function buildBaseUrl(): string {
  const config = getConfig();
  const endpoint = config.apiEndpoint;

  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    return `${endpoint}/api/products`;
  }

  return `http://${endpoint}/api/products`;
}

export async function getProducts(): Promise<Product[]> {
  const url = buildBaseUrl();

  const res = await fetch(url, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }

  return res.json();
}
