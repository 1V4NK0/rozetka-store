/* eslint-disable react/prop-types */

function Item({ item }) {
  return (
    <li className="flex flex-col rounded-md cursor-pointer h-auto hover:bg-stone-200 p-3 transition-colors duration-200">
      <div className="relative w-full h-[140px]"> {/* Container for the image */}
        <img
          src={item.image}
          alt={item.name} // Added alt text for better accessibility
          className="absolute inset-0 w-full h-full object-contain" // Image scaling
        />
      </div>
      <p className="mt-2 text-lg font-semibold">{item.name}</p> {/* Add spacing and styling */}
      <p className="text-gray-700">{item.price} €</p> {/* Add styling */}
    </li>
  );
}

export default Item;
