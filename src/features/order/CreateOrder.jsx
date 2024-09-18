import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { createOrder } from "../../apiStore";
import { redirect } from "react-router-dom";

function CreateOrder() {
  const { name, address, username } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Form
      method="post"
      action="/order/new"
      className="border mb-[60px] rounded-xl bg-stone-200 border-stone-500 p-10 sm:w-[500px]  w-[350px] mt-[80px] mx-auto flex flex-col gap-[20px]"
    >
      <h3 className="mt-120px mx-auto text-3xl mb-[20px]">
        Let&lsquo;s get your details! 🙂
      </h3>

      <div className="flex gap-[10px] flex-col">
        <label htmlFor="name" className="text-2xl text-stone-500 ">
          Full name
        </label>
        <input
          name="name"
          defaultValue={name}
          type="text"
          className="p-3 text-stone-500 text-xl border border-stone-400 rounded-md"
        />
      </div>

      <div className="flex gap-[10px] flex-col">
        <label htmlFor="username" className="text-2xl text-stone-500">
          Email
        </label>
        <input
          name="username"
          defaultValue={username}
          type="email"
          className="p-3 text-stone-500 text-xl border border-stone-400 rounded-md"
        />
      </div>

      <div className="flex gap-[10px] flex-col">
        <label htmlFor="phone" className="text-2xl text-stone-500">
          Phone number
        </label>
        <input
          name="phone"
          type="text"
          className="p-3 text-stone-500 text-xl border border-stone-400 rounded-md"
        />
      </div>

      <input type="hidden" name="cart" value={JSON.stringify(cart)} />

      <div className="flex gap-[10px] flex-col">
        <label htmlFor="address" className="text-2xl text-stone-500">
          Address
        </label>
        <input
          defaultValue={address}
          type="text"
          name="address"
          className="p-3 text-stone-500 text-xl border border-stone-400 rounded-md"
        />
      </div>

      <button className="hover:bg-green-500 transition-colors duration-100 p-3 bg-green-600 mt-[20px] text-2xl rounded-xl text-white w-[170px] mx-auto">
        Order
      </button>
    </Form>
  );
}

export const action = async ({ request }) => {
  const data = await request.formData();
  const cartString = data.get("cart");
  const cartObj = JSON.parse(cartString);

  const newOrder = {
    name: data.get("name"),
    email: data.get("username"),
    phone: data.get("phone"),
    address: data.get("address"),
    cart: cartObj,
  };
  console.log("NEW ORDER OBJ -> ", newOrder);
  console.log("CREATED ORDER -> ", await createOrder(newOrder));
  const createdOrder = await createOrder(newOrder);
  // console.log(createdOrder);
  // Redirect to the new order's page
  if (createdOrder && createdOrder.id) {
    return redirect(`/order/${createdOrder.id}`);
  }
};

export default CreateOrder;
