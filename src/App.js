import { lazy, Suspense, useContext, useEffect } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import LogInForm from "./Components/LogInForm";
import SignInForm from "./Components/SignInForm";
import { UserContext } from "./UserContext";
import { ProfileConetxt } from "./ProfileContext";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const Loader = lazy(() => import("./Components/Loader"));

const SignUp = lazy(() => import("./Pages/SignUp"));

const LogIn = lazy(() => import("./Pages/LogIn"));

const Profiles = lazy(() => import("./Pages/Profiles"));

const HomePage = lazy(() => import("./Pages/HomePage"));

function App() {
  const { username } = useContext(UserContext);

  const { avatar, selected } = useContext(ProfileConetxt);

  console.log(username);

  useEffect(() => {
    const getData = async () => {
      await setDoc(doc(db, "users", username.uid), {
        avatar: avatar,
        selected: selected,
      });
    };

    if (avatar.length > 0) {
      getData();
    }
  }, [avatar, selected]);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              exact
              path="/"
              element={username ? <Navigate to="/home" /> : <SignUp />}
            />
            <Route
              path="/"
              element={username ? <Navigate to="/home" /> : <LogIn />}
            >
              <Route index path="/login" element={<LogInForm />} />
              <Route path="/signin" element={<SignInForm />} />
            </Route>

            <Route
              path="/profiles"
              element={!username ? <Navigate to="/login" /> : <Profiles />}
            />
            <Route
              path="/home"
              element={username ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route path="/loader" element={<Loader />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
