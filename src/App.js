import './App.css';
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import { ChocolateL, FoodL, ShishaL, DrinksL, ChocolateR, FoodR, ShishaR, DrinksR, Home, Layout } from './Components';

function App() {
  let routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'foodar', element: <FoodR /> },
        { path: 'drinksar', element: <DrinksR /> },
        { path: 'chocolatear', element: <ChocolateR /> },
        { path: 'shishaar', element: <ShishaR /> },
        { path: 'fooden', element: <FoodL /> },
        { path: 'drinksen', element: <DrinksL /> },
        { path: 'chocolateen', element: <ChocolateL /> },
        { path: 'shishaen', element: <ShishaL /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={routers}>
      <Routes />
    </RouterProvider>
  );
}

export default App;
