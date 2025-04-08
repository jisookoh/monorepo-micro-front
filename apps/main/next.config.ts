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
        filename: "remoteEntry.js",
        remotes: {
          todo: `promise new Promise(resolve => {
            const remoteUrl = "http://localhost:3001/assets/remoteEntry.js";
            const script = document.createElement("script");
            script.src = remoteUrl;
            script.type = "module";
            script.onload = () => {
              resolve(window.todo);
            };
            document.head.appendChild(script);
          })`,
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          "react-dom": { singleton: true, eager: true, requiredVersion: false },
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
