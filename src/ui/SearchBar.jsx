function SearchBar() {
  return (
    <div className="flex ">
      <input
        type="text"
        placeholder="Search..."
        className="md:w-[250px] lg:w-[500px] sm:w-[250px] xs:w-[300px]  p-3 rounded-l-xl"
      />
      <button className="text-white hover:bg-slate-700 transition-colors duration-200 bg-black py-2 px-4 rounded-r-xl">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
