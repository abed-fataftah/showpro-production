import type { NextConfig } from "next";
// Validate typed content at build/dev start (CS §6.2/§6.8). Throws on invalid/incomplete content,
// or on remaining placeholders when SITE_BUILD_MODE=production. Build-time only; never client-bundled.
import "./schema/validate";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;