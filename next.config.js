// next.config.js 
module.exports = {
  webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: {
            test: /\.(js|ts)x?$/,
          },
          use: ['@svgr/webpack'],
        });
        config.resolve.symlinks = false
        return config;
      },
  cssLoaderOptions: {
    url: false
  },
}