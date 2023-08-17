import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: "/", element: <HomePage/>},
      {path: "/register", element: <Register/>},
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;
