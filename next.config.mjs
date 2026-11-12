/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
    ],
  },
  // Yeh root level par aayega (experimental se bahar)
  allowedDevOrigins: ["192.168.100.14:3000", "192.168.100.14", "*.loca.lt"],

  experimental: {
    serverActions: {
      allowedOrigins: ["*.loca.lt", "localhost:3000", "192.168.100.14:3000"],
    },
  },

  /* Turbopack options */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
