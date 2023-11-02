module.exports = async function (data) {
  const body = data['$trigger'].body;
  const products = [
    {
      title: body.title,
      slug: body.title.trim().replace(' ', '-').toLowerCase(),
      Description: body.description,
      collection: body.collection,
    },
  ];
  const user = {
    name: `${body['first-name']} ${body['last-name']}`,
    email: body.email,
  };
  return { user, products };
};

module.exports = async function (data) {
  const product = data.parse_body.products[0];
  const user = data.parse_body.user;
  const payload = {
    name: `name: ${user.name}`,
    title: `title: ${product.title}`,
    description: `description: ${product.Description}`,
    collection: `collection: ${product.collection}`,
    email: user.email,
  };
  return { payload };
};
