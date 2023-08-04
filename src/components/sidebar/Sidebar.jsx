import "./sidebar.css";
import OwnerImage from "../../Assets/images/Owner.png";

export default function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={OwnerImage} alt="Owner" />
            <p>
               I am a front-end software developer. Here I intend to introduce
               many new exciting thing about javascript language and its amazing
               libraries. Learn more Gain more...
            </p>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
               <li className="sidebarListItem">Javascript</li>
               <li className="sidebarListItem">Typescript</li>
               <li className="sidebarListItem">React</li>
               <li className="sidebarListItem">Node.js</li>
               <li className="sidebarListItem">Next.js</li>
               <li className="sidebarListItem">Tips</li>
            </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="socialContainer">
               <i className="socialIcons fa-brands fa-square-twitter"></i>
               <i className="socialIcons fa-brands fa-square-pinterest"></i>
               <i className="socialIcons fa-brands fa-square-facebook"></i>
               <i className="socialIcons fa-brands fa-square-instagram"></i>
            </div>
         </div>
      </div>
   );
}
