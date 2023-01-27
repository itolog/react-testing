// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const resolvePath = (p) => {
  return path.resolve(__dirname, p);
};

module.exports = {
  typescript: {
    enableTypeChecking: true,
  },
  webpack: {
    alias: {
      "@components": resolvePath("src/components"),
      "@pages": resolvePath("src/pages"),
      "@layouts": resolvePath("src/layouts"),
      "@images": resolvePath("src/components"),
      "@shared": resolvePath("src/shared"),
      "@hooks": resolvePath("src/shared/hooks"),
      "@store": resolvePath("src/store"),
    },
  },
};
