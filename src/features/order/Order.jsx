/* eslint-disable react/prop-types */
import { getOrder } from "../../apiStore";
import { useLoaderData } from "react-router";

function Order() {
  const order = useLoaderData();
  const { id, name, address, phone, email, cart } = order;

  return (
    <div className="mt-[100px] p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Order #{id}</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Customer Information</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Order Items</h2>
        <ul className="divide-y divide-gray-300">
          {cart?.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-25 object-cover rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Price: €{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-right text-xl font-bold">
        Total Price: €
        {cart?.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
