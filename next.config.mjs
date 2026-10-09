/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages static HTML export:
  // https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/**
 * Legacy redirects and security headers for Cloudflare Pages live in:
 * - public/_redirects
 * - public/_headers
 *
 * Content-Security-Policy is not enforced yet.
 * Before launch, set a policy that allows 'self', the site origin, and only the
 * font, image, and email endpoints the site actually uses. Start in report-only mode.
 */
