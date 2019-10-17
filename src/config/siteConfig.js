const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`;

const siteConfig = {
  activeEnv,
};

module.exports = siteConfig;
