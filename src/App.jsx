import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import Home from "./ui/Home";
import Cart from "./features/cart/Cart"
import Menu,{loader as menuLoader} from "./features/menu/Menu"
import Order from "./features/order/Order"
import CreateOrder from "./features/cart/CreateOrder"

import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  { element :<AppLayout/>,
    children: [{
      path: "/", element: <Home />
    },
    {
      path: "/cart", element: <Cart />
    },
    {
      path: "/menu",
      element: <Menu />,
      loader: menuLoader
    },
    {
      path: "/order/:orderId", element: <Order />
    },
    {
      path: "/createorder/new", element: <CreateOrder />
    },]
  }
])

function App() {
  

  return <RouterProvider router={router } />
}

export default App
