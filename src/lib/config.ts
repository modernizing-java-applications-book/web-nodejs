import { CoolstoreConfig } from '@/types';

export function getConfig(): CoolstoreConfig {
  return {
    apiEndpoint:
      process.env.NEXT_PUBLIC_API_ENDPOINT ||
      process.env.COOLSTORE_GW_ENDPOINT ||
      'http://localhost:8090',
    secureApiEndpoint:
      process.env.NEXT_PUBLIC_SECURE_API_ENDPOINT ||
      process.env.SECURE_COOLSTORE_GW_ENDPOINT ||
      'https://localhost:8443',
    ssoEnabled: process.env.SSO_URL ? true : false,
  };
}
