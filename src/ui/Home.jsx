//try to render items
import Item from "./Item";
import { getItems } from "../apiStore";
import { useLoaderData } from "react-router";
import Sidebar from "./Sidebar";
function Home() {
  //create getList function then
  //const list = getList()
  //then map through the list to create Item
  const list = useLoaderData();
  return (
    <div className="flex ">
      <Sidebar list={list} />
      <div className="flex-1 flex justify-center mt-[50px]">
        <ul className="grid  grid-cols-1 gap-[40px] md:grid-cols-3 sm:grid-cols-2 p-4">
          {list.map((item) => (
            <Item item={item} key={item.id} />
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
