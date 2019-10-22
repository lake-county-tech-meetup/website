const createEventPages = require(`./createEventPages`);
const paginateEvents = require(`./paginateEvents`);

const createPages = async args => {
  await createEventPages(args);
  await paginateEvents(args);
};

module.exports = createPages;
