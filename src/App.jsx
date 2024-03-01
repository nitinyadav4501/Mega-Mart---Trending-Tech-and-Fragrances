import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { Contextprovider } from "./context/context";
import Navbar from "./components/Navbar";
import AllProducts from "./components/AllProducts";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cartContext";
import { SearchContextProvider } from "./context/searchContext";
import SearchResult from './components/SearchResult'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/allProduct",
      element: (
        <>
          <Navbar />
          <AllProducts />
          <Footer />
        </>
      ),
    },
    {
      path: "/product-detail",
      element: (
        <>
          <Navbar />
          <ProductDetail />
          <Footer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart />
          <Footer />
        </>
      ),
    },
    {
      path: "/search-result",
      element: (
        <>
          <Navbar />
          <SearchResult />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <Contextprovider>
      <CartProvider>
        <SearchContextProvider>
          <RouterProvider router={router} />
        </SearchContextProvider>
      </CartProvider>
    </Contextprovider>
  );
}
export default App;
