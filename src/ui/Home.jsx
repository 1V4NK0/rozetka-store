import Item from "./Item";
import { getItems } from "../apiStore";
import { useLoaderData } from "react-router";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import useDebounce from "../useDebounce";
import { useState } from "react";

function Home() {
  const list = useLoaderData();
  const query = useSelector((state) => state.search.query);
  const { debouncedValue, loading } = useDebounce(query, 500);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter by query first
  const filteredByQuery = list.filter((item) =>
    item.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  // Filter the already filteredByQuery list by category if a category is selected
  const filteredByCategory = filteredByQuery.filter((item) =>
    selectedCategory ? item.category === selectedCategory : true
  );

  const noResults = filteredByCategory.length < 1;

  return (
    <>
      {loading ? (
        <h1 className="mt-[150px] text-center text-4xl font-semibold">
          Loading... 👀
        </h1>
      ) : noResults ? (
        <h1 className="mt-[150px] text-center text-4xl font-semibold">
          No results 🙃
        </h1>
      ) : (
        <div className="flex">
          <Sidebar list={list} onCategorySelect={setSelectedCategory} />
          <div className="flex-1 flex justify-center mt-[50px]">
            <ul className="grid grid-cols-1 gap-[40px] md:grid-cols-3 sm:grid-cols-2 p-4">
              {filteredByCategory.map((item) => (
                <Link key={item.id} to={`/item/${item.id}`}>
                  <Item item={item} />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export async function loader() {
  const list = await getItems(); // Ensure that getItems returns a promise if needed
  return list;
}

export default Home;
