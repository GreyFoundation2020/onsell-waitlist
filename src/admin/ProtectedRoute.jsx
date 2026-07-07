import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

export default function ProtectedRoute({ children }) {

  const [user, loading] = useAuthState(auth);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );

  if (!user)
    return <Navigate to="/admin/login" />;

  return children;

}