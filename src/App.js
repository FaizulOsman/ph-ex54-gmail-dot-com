import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Inbox from "./components/Inbox";
import ErrorMessage from "./layouts/ErrorMessage";
import Starred from "./components/Starred";
import Primary from "./components/Primary";
import Promotions from "./components/Promotions";
import Social from "./components/Social";
import Updates from "./components/Updates";
import Snoozed from "./components/Snoozed";
import Important from "./components/Important";
import Sent from "./components/Sent";
import Draft from "./components/Draft";
import Charts from "./components/Charts";
import Spam from "./components/Spam";
import Trash from "./components/Trash";
import Categories from "./components/Categories";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorMessage></ErrorMessage>,
      children: [
        {
          path: "/inbox",
          loader: () => fetch(`https://jsonplaceholder.typicode.com/comments`),
          element: <Inbox></Inbox>,
          children: [
            {
              path: "/inbox/primary",
              loader: () =>
                fetch(`https://jsonplaceholder.typicode.com/comments`),
              element: <Primary></Primary>,
            },
            { path: "/inbox/promotions", element: <Promotions></Promotions> },
            { path: "/inbox/social", element: <Social></Social> },
            {
              path: "/inbox/updates",
              loader: () =>
                fetch(`https://jsonplaceholder.typicode.com/comments`),
              element: <Updates></Updates>,
            },
          ],
        },
        { path: "/starred", element: <Starred></Starred> },
        { path: "/snoozed", element: <Snoozed></Snoozed> },
        { path: "/important", element: <Important></Important> },
        { path: "/sent", element: <Sent></Sent> },
        { path: "/draft", element: <Draft></Draft> },
        { path: "/charts", element: <Charts></Charts> },
        { path: "/spam", element: <Spam></Spam> },
        { path: "/trash", element: <Trash></Trash> },
        { path: "/categories", element: <Categories></Categories> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
