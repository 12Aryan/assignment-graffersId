import { createBrowserRouter } from "react-router-dom";
import Home from "../features/review-ratings/Home";
import ReviewDetail from "../features/Review-detail/ReviewDetail";

const Routes = createBrowserRouter([
  {
    path: "*",
    element: <div>404 Page Not found!</div>,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/detail',
    element: <ReviewDetail/>
  }
]);

export default Routes;
