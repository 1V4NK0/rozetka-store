/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, deleteItem } from "./CartSlice";
function CartItem({ item }) {
  //TODO:
  //FINISH CARTITEM, IT SHOULD SHOW QUANTITY AS WELL, ADD THE PROPERTY
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between lg:mx-[100px] mx-[40px] py-4 ">
      <div>
        <img src={item.image} alt="" className="h-[100px] lg:h-[140px]" />
      </div>

      <div className="flex flex-col w-[150px]">
        <h1 className="text-2xl">{item.name}</h1>
        <p
          onClick={() => dispatch(deleteItem(item.id))}
          className="text-red-600 cursor-pointer mt-[5px] "
        >
          Remove
        </p>
        <div className="text-lg mt-[10px] flex  rounded-md border border-stone-400  justify-around">
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        </div>
      </div>

      <div className="text-xl">{item.price}€</div>
    </li>
  );
}

export default CartItem;
