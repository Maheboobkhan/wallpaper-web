import Link from "next/link";
const BookCards = ({ bookData }) => {
    return (
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bookData.map((item) => (
          <Link key={item.id} href={`/product-details/${item.id}`}>
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2">{item.price}/Roll</p>
              {/* <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded">Buy Now</button> */}
            </div>
          </div>
          </Link>
        ))}
      </div>
    );
  };
  
  export default BookCards;
  