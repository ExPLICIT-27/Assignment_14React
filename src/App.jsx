import "./App.css";
import { Question1 } from "../Components/Question1";
import { Question2 } from "../Components/Question2";
import { ProfileImage } from "../Components/ProfileImage";
import { UserInfo } from "../Components/UserInfo";
import { UserPosts } from "../Components/UserPosts";
function App() {
  return (
    <div className="main">
      <Question1 />
      <Question2 />
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
}

export default App;
