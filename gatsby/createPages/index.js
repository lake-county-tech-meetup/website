const createEventPages = require(`./createEventPages`);

const createPages = async args => {
  await createEventPages(args);
};

module.exports = createPages;
