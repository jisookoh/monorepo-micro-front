import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import withTM from "next-transpile-modules";

const withTranspile = withTM(["@ui"]);

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    const location = options.isServer ? "ssr" : "chunks";

    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        filename: `static/${location}/remoteEntry.js`,
        remotes: {
          todo: `todo@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
          remote: "remote@http://localhost:3001/remote.js",
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};

export default withTranspile(nextConfig);
