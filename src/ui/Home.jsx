//try to render items
import Item from "./Item";
import { getItems } from "../apiStore";
function Home() {
  //create getList function then
  //const list = getList()
  //then map through the list to create Item
  const list = getItems();
  return (
    <ul>
      {list.map((item) => {
        <Item item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default Home;
