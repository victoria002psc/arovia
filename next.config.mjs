/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/medicines", destination: "/pharmacy", permanent: true },
      { source: "/medicines/:path*", destination: "/pharmacy", permanent: true },
      { source: "/equipment", destination: "/equipment-trade", permanent: true },
      { source: "/equipment/export", destination: "/equipment-trade/export", permanent: true },
      { source: "/equipment/equipment", destination: "/equipment-trade/medical-equipment", permanent: true },
      { source: "/equipment/import", destination: "/equipment-trade", permanent: true },
      { source: "/equipment/supplies", destination: "/equipment-trade", permanent: true },
      { source: "/home-care", destination: "/care", permanent: true },
      { source: "/home-care/:path*", destination: "/care", permanent: true },
      { source: "/disclaimer", destination: "/medical-disclaimer", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;

/**
 * Content-Security-Policy is not enforced yet.
 * Before launch, set a policy that allows 'self', the site origin, and only the
 * font, image, and email endpoints the site actually uses. Start in report-only mode.
 */
