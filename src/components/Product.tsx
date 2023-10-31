import React from 'react';

type Props = {};

const Product = ({ product }: Props) => {
  return (
    <div>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-[24px] text-gray-900">{product.title}</h3>
      <div
        className="mt-1 text-lg font-medium text-gray-900"
        dangerouslySetInnerHTML={{ __html: product.Description }}
      />
    </div>
  );
};

export default Product;
