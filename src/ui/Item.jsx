/* eslint-disable react/prop-types */

function Item({ item }) {
  return <div>
    <img src={item.image} alt="" />
    <p>{item.name}</p>
    <p>{item.price}</p>
  </div>;
}

export default Item;
