import Sidebar from "../../sidebar/Sidebar";
import "./settings.css";
import myImage from "../../../Assets/images/Owner.png";

export default function Settings() {
   return (
      <div className="settings">
         <div className="settingsWrapper">
            <div className="settingsTitle">
               <span className="settingsUpdateTitle">Update Your Account</span>
               <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
               <label>Profile Picture</label>
               <div className="settingsProfilePicture">
                  <img
                     src={myImage}
                     alt="Image of Owner"
                     className="profileImage"
                  />
                  <label htmlFor="fileInput">
                     <i className=" userIcon fa-solid fa-circle-user"></i>
                  </label>
                  <input
                     type="file"
                     id="fileInput"
                     style={{ display: "none" }}
                  />
               </div>
               <label>User Name:</label>
               <input type="text" placeholder="your name..." />
               <label>Email:</label>
               <input type="email" placeholder="your email..." />
               <label>Password:</label>
               <input type="password"/>
            </form>
         </div>
         <Sidebar />
      </div>
   );
}
