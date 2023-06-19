import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Navbar from "./components/navbar/Navbar"
import { ContextProvider } from "./Context"

export default function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Products />
        },
        {
          path: "/cart",
          element: <Cart />
        },
      ]
    },
  ])

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}