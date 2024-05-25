// components/ProductCard.js
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product-details/${product.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.price}</p>
          {/* <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Buy Now
              </button> */}
          {/* <p className="text-gray-600">{product.description}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
