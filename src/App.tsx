import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: "/", element: <HomePage/>},
    ],
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;
