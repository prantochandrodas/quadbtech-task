import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomeBanners from './Components/Homebanner/HomeBanners';
import AllShows from './Components/AllShows/AllShows';
import Shows from './Components/Shows/Shows';
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom/dist';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import ViewDetails from './Components/ViewDetails/ViewDetails';

function App() {
  const routers=createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },{
          path:'/details',
          element:<ViewDetails></ViewDetails>
        },{
          path:'shows',
          element:<Shows></Shows>
        }
      ]
    }
  ])
  return (
    <div className="App">
     {/* <Navbar></Navbar>
     <HomeBanners></HomeBanners>
     <Shows></Shows> */}
     <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
