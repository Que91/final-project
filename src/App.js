import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import PostList from "./components/PostList";
import { Route, Routes } from "react-router-dom";
import NewPostForm from "./components/NewPostForm";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <PostProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <NewPostForm />
                <PostList />
              </>
            }
          />
        </Routes>
    </PostProvider>
  );
}

export default App;
