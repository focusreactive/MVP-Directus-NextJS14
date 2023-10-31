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
    products {
      title
      slug
      Description
    }
  }
}

`;
export default async function Home() {
  const { collections } = await client.query(collectionsQuery);
  console.log('🚀 ~ file: page.tsx:21 ~ Home ~ collections:', collections);
  return (
    <main className="mx-20">
      {collections.map((c) => (
        <Collection key={c.slug} {...c} />
      ))}
    </main>
  );
}
