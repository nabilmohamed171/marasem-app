/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jsonplaceholder.typicode.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "http://192.168.1.3:3000/",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
