import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { Alert } from "./components/layout/Alert";
import { useEffect } from "react";
import { refreshToken } from "./redux/operations(thunks)";
import { Dashboard } from "./components/dashboard/Dashboard";
import { PrivateRoute } from "./components/routing/PrivateRoute";
import { CreateProfile } from "./components/profile-forms/AddProfile";
import { EditProfile } from "./components/profile-forms/EditProfile";
import { AddExperience } from "./components/profile-forms/AddExperience";
import { AddEducation } from "./components/profile-forms/AddEducation";
import { ProfilesList } from "./components/profiles/ProfilesList";
import { Profile } from "./components/profile/Profile";
import { Posts } from "./components/posts/Posts";
import { Post } from "./components/post/Post";
import { NotFoundPage } from "./components/routing/NotFoundPage";

const App = () => {
  const alerts = useSelector((store) => store.alert);
  const token = useSelector((store) => store.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("token", token);
    if (token) {
      dispatch(refreshToken(token));
    } else {
      return;
    }
  }, [dispatch, token]);

  return (
    <>
      <Toaster />
      <Navbar />
      <Alert alerts={alerts} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<ProfilesList />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/add-experience" element={<AddExperience />} />
          <Route path="/add-education" element={<AddEducation />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:postId" element={<Post />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
