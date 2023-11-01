// @ts-nocheck
import Collection from '@/components/Collection';
import ProductCards from '@/components/ProductCards';
import { client } from '@/model/api';
import Image from 'next/image';

const productQuery = `
query GetProduct($slug: ID!) {
  product: Products_by_id(id: $slug) {
    title
    slug
    Description
    image {
      id
    }
  }
}
`;
export default async function Product({ params }) {
  const { slug } = params;
  const { product } = await client.query(productQuery, { slug });
  return (
    <div>
      <ProductCards products={[product]} />
    </div>
  );
}
