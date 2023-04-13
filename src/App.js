import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Root from './Root';

//installed this
//npm install 'react-router-dom'

const router = createBrowserRouter([
  {path: '/', element: <Root/>, children:[
    {path:'/' , element: <Home/>},
    {path:'/about' , element: <About/>},
    // {path}
  ]}
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
