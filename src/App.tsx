import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RestaurantPage from "./pages/RestaurantPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: "/", element: <HomePage/>},
      {path: "/register", element: <RegisterPage/>},
      {path: "/login", element: <LoginPage />},
      {path: "/restaurant/:id", element: <RestaurantPage/>},
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;
