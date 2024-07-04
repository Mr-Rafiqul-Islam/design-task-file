import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import RootLayout from "./components/layouts/RootLayout";
import Notfound from "./pages/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} />
      <Route path="single-rooms" element={<SingleRoom />} />
    </Route>
  )
);

function App() {
 
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
