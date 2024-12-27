import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // 确保 Webpack 正确处理 JSON 文件
    config.module.rules.push({
      test: /\.json$/,
      use: 'json-loader',
      type: 'javascript/auto'
    });
    return config;
  },
};

export default nextConfig;
