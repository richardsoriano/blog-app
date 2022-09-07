const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = (phase) => {
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false
  //   }
  //   return config
  // },
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "richard",
        mongodb_password: "PrwJhwPtGcguZF65",
        mongodb_clustername: "cluster0",
        mongodb_database: "richards-blog-dev",
      },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false
        }
        return config
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    }
  }
  return {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false
      }
      return config
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }
}
