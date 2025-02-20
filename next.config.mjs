/** @type {import('next').NextConfig} */


const nextConfig = {
    output: "standalone", // Helps Netlify find assets
    reactStrictMode: true,
    trailingSlash: true, // Ensures CSS files get proper paths
    images: { unoptimized: true }, // Helps with Netlify image issues
    experimental: { appDir: false } // Ensure Next.js 13+ handles routing properly
  };
  
  export default nextConfig;