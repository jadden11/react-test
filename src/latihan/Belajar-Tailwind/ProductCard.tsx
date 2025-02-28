import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  addToCart: (title: string, price: string, image: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  addToCart,
}) => {
  return (
    <div className="w-64 bg-white shadow-md rounded-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-poppins font-semibold tracking-tight leading-5 line-clamp-1">
        {title}
      </h3>
      <p className="pt-2 font-poppins font-semibold text-sm text-gray-500">
        {price}
      </p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300 font-semibold font-inter"
        onClick={() => addToCart(title, price, image)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
