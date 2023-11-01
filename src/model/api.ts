const URL = 'https://artcryption-poc.directus.app/graphql';
const Authorization = 'Bearer kBgJQb-Eqvq71MUJdzDn65xUfIFzcCDx';

export const client = {
  query: async (query: string, variables = {}) => {
    const resp = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization,
        'X-REQUEST-TYPE': 'GraphQL',
      },
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    }).then((r) => r.json());

    return resp.data;
  },
};
