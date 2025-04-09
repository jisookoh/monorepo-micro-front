import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import withTM from "next-transpile-modules";

const withTranspile = withTM(["@ui"]);

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "main",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            todo: "todo@http://localhost:3001/assets/remoteEntry.js",
          },
          extraOptions: {
            exposePages: false,
          },
        })
      );
    }

    return config;
  },
};

export default withTranspile(nextConfig);
