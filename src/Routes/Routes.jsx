import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/listedBooks",
          element: <ListedBooks/>,
        },
        {
          path: "/pagesToRead",
          element: <PagesToRead/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/book-details/:bookId",
          element: <BookDetails/>,
        },
      ],
    },
  ]);

  export default router;