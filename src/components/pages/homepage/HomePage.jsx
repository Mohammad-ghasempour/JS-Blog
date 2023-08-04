import Header from "../../header/Header";
import "./homePage.css";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";

export default function HomePage() {
   return (
      <>
         <Header />
         <div className="homePage">
            <Posts />
            <Sidebar />
         </div>
      </>
   );
}
