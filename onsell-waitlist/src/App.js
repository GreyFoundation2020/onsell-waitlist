import Home from "/home.jsx";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Login from "./admin/Login";
import ProtectedRoute from "./admin/ProtectedRoute";
import Dashboard from "./admin/Dashboard";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route  path="/" element={< Home/>} />
        <Route path="/privacy" element={<Privacy />} />
       <Route path="/terms" element={<Terms />} />
        <Route
        path="/admin/login"
        element={<Login/>}
        />

        <Route
        path="/admin"
        element={
        <ProtectedRoute>
        <Dashboard/>
        </ProtectedRoute>
        }
        />
       </Routes>
     </BrowserRouter>
    </>

    
  );
}

export default App;