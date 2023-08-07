import Sidebar from "../../sidebar/Sidebar";
import "./write.css";
import javascriptImage from '../../../Assets/images/Javascript.jpg'

export default function Write() {
   return (
      <div className="write">
         <img src={javascriptImage} alt="Javascript Header Image" className="witeImage" />
         <form className="writeForm">
            <div className="writeFormGroup">
               <label htmlFor="fileInput">
                  <i className="writeIcon fa-solid fa-plus"></i>
               </label>
               <input type="file" id="fileInput" style={{ display: "none" }} />
               <input
                  type="text"
                  placeholder="Title"
                  className="writeInput"
                  autoFocus={true}
               />
            </div>

            <div className="writeFormGroup">
               <textarea
                  placeholder="Tell your story..."
                  type="text"
                 
                  className="writeInput writeText"
               ></textarea>
            </div>

            <button className="writeSubmit">Publish</button>
         </form>
      </div>
   );
}
