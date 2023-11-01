// @ts-nocheck
import React from 'react';
/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react';

import { client } from '@/model/api';
import SubmitOnClient from '@/components/SubmitOnClient';

const collectionsQuery = `
query {
  collections: Categories {
    title
    slug
  }
}

`;

export default async function Submit() {
  const { collections } = await client.query(collectionsQuery);

  return <SubmitOnClient collections={collections} />;
}
