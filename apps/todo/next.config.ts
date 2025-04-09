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
        name: "todo",
        filename: `static/${location}/remoteEntry.js`,
        exposes: {
          "./todoApp": "./pages/todo/index.tsx",
        },
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    );

    return config;
  },
};

export default withTranspile(nextConfig);
