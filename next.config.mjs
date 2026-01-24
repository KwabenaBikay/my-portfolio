/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // 1. Force React Strict Mode for better security practices
  reactStrictMode: true,

  // 2. Remove "X-Powered-By: Next.js" header so hackers don't know your stack
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            // PROTECTS AGAINST: Clickjacking
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // PROTECTS AGAINST: MIME Sniffing
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // PROTECTS AGAINST: XSS (Cross-Site Scripting)
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            // PROTECTS AGAINST: Data leakage via Referrer
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // PROTECTS AGAINST: Man-in-the-Middle attacks (Forces HTTPS)
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            // PROTECTS AGAINST: Code Injection (Content Security Policy)
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;