import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getItem } from "../apiStore";
import { addItem } from "../features/cart/CartSlice";

/* eslint-disable react/prop-types */
export default function ItemView() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (item) {
      dispatch(addItem(item));
    }
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemData = await getItem(id); // Fetch item based on id
        setItem(itemData);
      } catch (error) {
        console.error("Failed to fetch item:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return (
      <p className="text-center font-semibold text-3xl mt-[200px]">
        Loading...
      </p>
    ); // Render something in case item is undefined
  }

  return (
    <div className="flex mt-[100px]  items-center justify-center  gap-[20px]">
      <div className="relative w-full h-[240px] mx-[20px]">
        <img
          src={item.image || ""} // Use default image if `item.image` is undefined
          alt={item.name || "Item"} // Fallback alt text
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-3xl font-semibold">
          {item.name || "No name available"}
        </h3>{" "}
        {/* Add fallback text */}
        <p className="text-stone-500 text-lg">
          Price: {item.price || "Price not available"}
        </p>
        <p className="text-stone-500 text-lg">
          Category: {item.category || "Category not available"}
        </p>
        <p className="text-stone-500 text-lg">
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sed ipsum impedit quis veniam laudantium velit harum magni natus
          reprehenderit perferendis alias, tempora fuga necessitatibus dicta
          sapiente temporibus provident tempore ullam!
        </p>
        <button
          onClick={handleAdd}
          className="bg-green-600 w-[140px] hover:bg-green-500 transition-colors duration-200 rounded-lg text-white p-3 font-semibold text-lg"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
