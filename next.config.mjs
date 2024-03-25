/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API_ENDPOINT: 'https://proyectobackendagora.onrender.com/blog/ListByLanguaje/',
    API_ENDPOINT_NEWSLETTER:'https://proyectobackendagora.onrender.com/users/Newsletter',
    API_ENDPOINT_BYBLOG:'https://proyectobackendagora.onrender.com/blog/ByTitle/',
    REACT_APP_HCAPTCHA_SITE_KEY: '28b5c908-c010-4342-86fc-8a6a6d267645',
    REACT_APP_HCAPTCHA_SECRET_KEY: 'ES_5a2fd2183db844c291aeb6f592872d5d',
  },
};


export default nextConfig;
