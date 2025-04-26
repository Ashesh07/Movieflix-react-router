import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact, contactData } from "./Pages/Contact";
import { Movies } from "./Pages/Movies";
import AppLayout from "./Components/Layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./Pages/ErrorPage";
import { getMoviesData } from "./API/GetApiData";
import { MovieDetails } from "./Components/UI/MovieDetails";
import { getMoviesDetails } from "./API/GetMovieDetails";

const App =()=> {

  const router = createBrowserRouter([
    {
      path :"/",
      element : <AppLayout />,
      errorElement : <ErrorPage />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/contact",
          element : <Contact />,
          action : contactData,
        },
        {
          path : "/movies",
          element : <Movies />,
          loader : getMoviesData,
        },
        {
          path : "/movies/:movieID",
          element : <MovieDetails />,
          loader : getMoviesDetails,
        },
      ]
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/movies" element={<Movies />} />
  //     </Route>
  //   )
  // )

  return <RouterProvider router={router} />
}

export default App;