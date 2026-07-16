import Home from "/home.jsx";

import { HashRouter,Routes,Route} from "react-router-dom";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Login from "./admin/Login";
import ProtectedRoute from "./admin/ProtectedRoute";
import Dashboard from "./admin/Dashboard";

function App() {
  return (
    <>
    <HashRouter>
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
     </HashRouter>
    </>

    
  );
}

export default App;