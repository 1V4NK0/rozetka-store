import AppLayout from "./ui/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ui/Error";
import Home, { loader as itemsLoader } from "./ui/Home";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import User from "./features/user/User";
import ItemView from "./ui/ItemView";
function App() {
  //TODO
  /*
  1. working search
  2. access cart
  3. working categories, when click it shows only items from the category
  4. sidebar repeating
   */

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: itemsLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
          errorElement: <Error />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          errorElement: <Error />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/item/:id",
          element: <ItemView />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
