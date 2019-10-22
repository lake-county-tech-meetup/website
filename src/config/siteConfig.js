const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`;

const showDraft = activeEnv === `production`;

const events = {
  itemsPerPage: 2,
};

const siteConfig = {
  activeEnv,
  events,
  showDraft,
};

module.exports = siteConfig;
