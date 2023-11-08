// @ts-nocheck
import Collection from '@/components/Collection';
import { client } from '@/model/api';
import Image from 'next/image';

const collectionsQuery = `
query {
  collections: Categories {
    title
    slug
    type
    date_created
    products(filter: {status: {_eq: "published"}}) {
      title
      slug
      Description
      image {
        id
      }
    }
  }
}

`;
export default async function Home() {
  const { collections } = await client.query(collectionsQuery);
  return (
    <main className="mx-20">
      {collections.map((c) => (
        <Collection key={c.slug} {...c} />
      ))}
    </main>
  );
}
