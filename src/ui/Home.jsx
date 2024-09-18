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
  //use debounce for query value NOT for calling a function
  const { debouncedValue, loading } = useDebounce(query, 250);

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <h1 className="mt-[100px]">Loading...</h1>
      ) : (
        <div className="flex">
          <Sidebar list={list} />
          <div className="flex-1 flex justify-center mt-[50px]">
            <ul className="grid grid-cols-1 gap-[40px] md:grid-cols-3 sm:grid-cols-2 p-4">
              {filteredList.map((item) => (
                <Link key={item.id} to={`/item/${item.id}`}>
                  <Item item={item} />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>

    // <div className="flex">
    //   {loading ? (
    //     <h1 className="mt-[100px]">Loading...</h1>
    //   ) : (
    //     <>
    //       <Sidebar list={list} />
    //       <div className="flex-1 flex justify-center mt-[50px]">
    //         <ul className="grid grid-cols-1 gap-[40px] md:grid-cols-3 sm:grid-cols-2 p-4">
    //           {filteredList.map((item) => (
    //             <Link key={item.id} to={`/item/${item.id}`}>
    //               <Item item={item} />
    //             </Link>
    //           ))}
    //         </ul>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
}

export async function loader() {
  const list = await getItems(); // Ensure that getItems returns a promise if needed
  return list;
}

export default Home;
