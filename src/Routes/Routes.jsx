import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

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
          path: "/ListedBooks",
          element: <h2>Listed Books</h2>,
        },
        {
          path: "/pagesToRead",
          element: <h2>Pages to Read</h2>,
        },
      ],
    },
  ]);

  export default router;