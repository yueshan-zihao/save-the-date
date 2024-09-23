const isProd = process.env.NODE_ENV === 'production';
/**
 * @type {import('next').NextConfig}
 */


const nextConfig = {
    // assetPrefix: isProd ? '/save-the-date' : '',
    output: 'export',
    images: {
        unoptimized: true,
    },
    env: {
        wedding_url: "https://www.theknot.com/us/yueshan-zhang-and-zihao-chen-jun-2025/#",
        prodUrl: ''
    },
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
   
  export default nextConfig;
  