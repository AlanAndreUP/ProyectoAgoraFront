import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_ENDPOINT: 'http://localhost:3001/blog/ListByLanguaje/es',
 
    REACT_APP_HCAPTCHA_SITE_KEY: '28b5c908-c010-4342-86fc-8a6a6d267645',
    REACT_APP_HCAPTCHA_SECRET_KEY: 'ES_5a2fd2183db844c291aeb6f592872d5d',
  },
};

export default nextConfig;
