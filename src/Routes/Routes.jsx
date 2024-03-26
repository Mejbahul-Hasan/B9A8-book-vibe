import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

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
          element: <h2>Pages to Read</h2>,
        },
        {
          path: "/book-details/:bookId",
          element: <BookDetails/>,
        },
      ],
    },
  ]);

  export default router;