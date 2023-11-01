// @ts-nocheck
import React from 'react';
import CollectionHeader from './CollectionHeader';
import ProductCards from './ProductCards';

type Props = {};

const Collection = (props: Props) => {
  return (
    <div>
      <CollectionHeader {...props} />
      <ProductCards products={props.products} />
    </div>
  );
};

export default Collection;
