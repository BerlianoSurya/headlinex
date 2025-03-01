/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // experimental: {
  //   appDir: true,
  // },
}

export default nextConfig
