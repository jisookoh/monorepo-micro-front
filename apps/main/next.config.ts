import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(config: Configuration, options) {
    config.plugins = config.plugins || [];

    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        remotes: {
          todo: "todo@http://localhost:3001/assets/remoteEntry.js",
        },
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
        },
        extraOptions: {
          exposePages: false,
        },
      })
    );

    return config;
  },
};

export default nextConfig;
