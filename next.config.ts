import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/main',
        destination: '/posts',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
