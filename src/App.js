import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
      position="top-center"
      />
     
    </div>
  );
}

export default App;
