import AppLayout from "./ui/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
