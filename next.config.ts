import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Ignore debug logs and .cursor directory to prevent infinite recompiles in dev
      const ignored = [
        ...(Array.isArray(config.watchOptions?.ignored)
          ? (config.watchOptions!.ignored as string[])
          : []),
        "**/.cursor/**",
        "**/*.log",
      ];
      (config as typeof config & { watchOptions?: { ignored?: string[] } }).watchOptions = {
        ...(config.watchOptions ?? {}),
        ignored,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "womensmentoringfoundation.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.womensmentoringfoundation.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
