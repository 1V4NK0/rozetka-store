//try to render items
import Item from "./Item";
import { getItems } from "../apiStore";
import { useLoaderData } from "react-router";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import useDebounce from "../useDebounce";
function Home() {
  const list = useLoaderData();
  const query = useSelector((state) => state.search.query);

  //create filtered list based on query:
  const filteredList = useDebounce(
    () => list.filter((item) => item.name.toLowerCase().includes(query)),
    500
  );

  return (
    <div className="flex ">
      <Sidebar list={list} />
      <div className="flex-1 flex justify-center mt-[50px]">
        <ul className="grid  grid-cols-1 gap-[40px] md:grid-cols-3 sm:grid-cols-2 p-4">
          {filteredList.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Item item={item} />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function loader() {
  const list = getItems();
  return list;
}

export default Home;
