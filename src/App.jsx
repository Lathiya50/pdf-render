import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import LoginForm from "./components/auth/LoginForm";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/invoice-details"
                  element={<h1>Invoice details</h1>}
                />
                <Route path="/comments" element={<h1>Comments</h1>} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
