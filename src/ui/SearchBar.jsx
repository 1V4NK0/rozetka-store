import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { inputUpdate } from "./searchSlice";
function SearchBar() {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  console.log(query);
  return (
    <div className="flex ">
      <input
        value={query}
        onChange={(e) => dispatch(inputUpdate(e.target.value))}
        type="text"
        placeholder="I need..."
        className="text-l md:w-[250px] lg:w-[500px] sm:w-[250px]   p-3 rounded-l-xl"
      />
      <button className="text-white hover:bg-slate-700 transition-colors duration-200 bg-black py-2 px-4 rounded-r-xl">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
