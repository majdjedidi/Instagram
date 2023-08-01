import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/useAuthListener";
import UserContext from "./context/user";
function App() {
  const {user} = useAuthListener();
  const Login = lazy(() => import("./pages/Login"));
  const Signup = lazy(() => import("./pages/Signup"));
  const NotFound = lazy(() => import("./pages/NotFound"));
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const Profile = lazy(() => import("./pages/Profile"));
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Routes>
            <Route path={ROUTES.LOGIN} Component={Login} />
            <Route path={ROUTES.SIGN_UP} Component={Signup} />
            <Route path={ROUTES.DASHBOARD} Component={Dashboard} />
            <Route path="*" Component={NotFound} />
            <Route path={ROUTES.PROFILE} Component={Profile} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;