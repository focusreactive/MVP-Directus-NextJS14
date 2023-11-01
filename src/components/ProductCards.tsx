// @ts-nocheck
export default function ProductCards({ products }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                {product?.image?.id ? (
                  <img
                    src={`https://artcryption-poc.directus.app/assets/${product?.image?.id}?width=280&format=auto`}
                    alt={product.slug}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                ) : null}
              </div>
              <h3 className="mt-4 text-[24px] text-gray-900">
                {product.title}
              </h3>
              <div
                className="mt-1 text-lg font-medium text-gray-900"
                dangerouslySetInnerHTML={{ __html: product.Description }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
