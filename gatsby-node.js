const onCreateNode = require(`./gatsby/onCreateNode`);
const onCreateWebpackConfig = require(`./gatsby/onCreateWebpackConfig`);
const createPages = require(`./gatsby/createPages`);

exports.onCreateWebpackConfig = onCreateWebpackConfig;
exports.onCreateNode = onCreateNode;
exports.createPages = createPages;
