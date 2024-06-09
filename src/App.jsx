import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="container">
          <Navbar />
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "protocol",
          element: <div>Protocol</div>,
        },
        {
          path: "journal",
          element: <div>journal</div>,
        },
        {
          path: "media",
          element: <div>media</div>,
        },
        {
          path: "gallary",
          element: <div>gallary</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
