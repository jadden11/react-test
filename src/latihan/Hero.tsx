const Hero = () => {
  return (
    <section className="relative bg-gray-100 text-center py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Home Is Where Your Story Begins.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock Your Dream Home. Explore Endless Possibilities with HomeVista.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          Find Properties
        </button>
      </div>
    </section>
  );
};

const FeaturedListings = () => {
  const listings = [
    { name: "Serenity Meadows", location: "Malibu, California" },
    { name: "Harmony Heights", location: "Aspen, Colorado" },
    { name: "Tranquil Haven", location: "Ontario, Canada" },
    { name: "Blissful Retreat", location: "Manhattan, New York" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Featured Listing</h2>
        <p className="mt-4 text-gray-600">
          Unveiling the Epitome of Elegance and Luxury.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {listings.map((listing, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {listing.name}
              </h3>
              <p className="text-gray-600">{listing.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              Fostering a future where every individual finds their perfect
              home.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              Transforming the real estate landscape by leveraging innovative
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero, FeaturedListings, VisionMission };
