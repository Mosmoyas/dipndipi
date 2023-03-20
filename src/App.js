import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Chocolate, Home, Layout, Shisha, Food, Drinks, About } from './Components';
// import Products from "./Containers/Products"
import Reciever from './Containers/Reciever';




function App() {


  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'food', element: <Food /> },
        { path: 'drinks', element: <Drinks /> },
        { path: 'chocolate', element: <Chocolate /> },
        { path: 'shisha', element: <Shisha /> },
        { path: 'chocolate', element: <Chocolate /> },
        { path: 'about', element: <About /> },
        { path: 'reciever', element: <Reciever /> },
 

      ]
    }
  ]);
  return (
    <>

      <RouterProvider router={routers} />

    </>

  );
}

export default App;
