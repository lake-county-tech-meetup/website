const onCreateNode = require(`./gatsby/onCreateNode`);
const onCreateWebpackConfig = require(`./gatsby/onCreateWebpackConfig`);
const createPages = require(`./gatsby/createPages`);
const createSchemaCustomization = require(`./gatsby/createSchemaCustomization`);

exports.onCreateWebpackConfig = onCreateWebpackConfig;
exports.onCreateNode = onCreateNode;
exports.createPages = createPages;
exports.createSchemaCustomization = createSchemaCustomization;
