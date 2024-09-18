import { getCart } from "./CartSlice";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
export default function Cart() {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  const total = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  if (cart.length < 1) {
    return (
      <h1 className="text-center text-3xl mt-[120px]">
        Let&lsquo;s add something here! 🛒 😻
      </h1>
    );
  }

  return (
    <div className="my-[80px]">
      <ul className="flex flex-col divide-y  ">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="text-center  text-xl font-semibold mt-[20px] ">
        Total: {total.toFixed(2)} €
      </div>
      <div className="flex gap-5 justify-center ">
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 w-[200px] mt-10 py-5 px-7 text-xl hover:bg-green-700 hover:scale-95  text-white rounded-xl"
        >
          Back to home
        </button>
        <button
          onClick={() => navigate("/order/new")}
          className="bg-green-600 w-[200px] mt-10 py-5 px-7 text-xl hover:bg-green-700 hover:scale-95  text-white rounded-xl"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
