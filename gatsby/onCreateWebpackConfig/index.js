const path = require(`path`);

const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(`src`), `node_modules`],
    },
  });
};

module.exports = onCreateWebpackConfig;
