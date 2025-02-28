import React, { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image:
      "https://hokben-images.s3.ap-southeast-3.amazonaws.com/menu/1626b40a074bb722f3e1f7febf4c5fdb-1739169570116",
    title: "Price 4 Simple Set Teriyaki",
    price: "Rp. 150.000",
  },
  {
    image:
      "https://hokben-images.s3.ap-southeast-3.amazonaws.com/menu/2396eb55a1d42529ab9736a22c4618ed-1738738403405",
    title: "Katsu Sando Mayo Sauce",
    price: "Rp. 19.000",
  },
  {
    image:
      "https://hokben-images.s3.ap-southeast-3.amazonaws.com/menu/fa31648038e1988b3305e0a4a215bf3a-1740037308248",
    title: "Super bowl spicy chicken teriyaki",
    price: "Rp. 33.000",
  },
];

const ProductList: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState<
    { title: string; price: string; quantity: number; image: string }[]
  >([]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  const addToCart = (title: string, price: string, image: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.title === title);
      if (existingItem) {
        return prevCart.map((item) =>
          item.title === title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { title, price, quantity: 1, image }];
    });
  };

  const removeFromCart = (title: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.title === title);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.title === title ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.title !== title);
    });
  };

  const calculateTotal = () => {
    return (
      "Rp. " +
      cart
        .reduce(
          (total, item) =>
            total + parseFloat(item.price.replace("Rp.", "")) * item.quantity,
          0
        )
        .toLocaleString("id-ID", {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })
    );
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <input
        type="text"
        placeholder="Search products..."
        className="mb-4 p-2 border rounded w-full max-w-md mx-auto block"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} addToCart={addToCart} />
        ))}
      </div>
      {/* Cart */}
      <div className="mt-6 p-6 bg-white shadow-lg font-inter rounded-xl max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          🛒 Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg shadow-md"
                    />
                    <div>
                      <p className="text-gray-800 font-medium truncate w-32">
                        {item.title}
                      </p>
                      <p className="text-gray-600 text-sm">x{item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    Rp.{" "}
                    {(
                      parseFloat(item.price.replace("Rp.", "")) * item.quantity
                    ).toLocaleString("id-ID", {
                      minimumFractionDigits: 3,
                      maximumFractionDigits: 3,
                    })}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 active:scale-90 transition"
                      onClick={() => removeFromCart(item.title)}
                    >
                      -
                    </button>
                    <button
                      className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 active:scale-90 transition"
                      onClick={() =>
                        addToCart(item.title, item.price, item.image)
                      }
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-xl font-bold text-right text-gray-900">
              🏷️ Total: Rp. {calculateTotal()}
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
