import "./singlePost.css";
import nodeImage from "../../Assets/images/Js.jpg";

export default function SinglePost() {
   return (
      <div className="singlePost">
         <div className="singlePostWrapper">
            <img
               src={nodeImage}
               alt="node-javascript"
               className="singlePostImg"
            />
            <h1 className="singlePostTitle">
               Lorem ipsum dolor sit amet consectetur
               <div className="singlePostEditIcons">
                  <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
                  <i className=" singlePostIcon fa-solid fa-trash-can"></i>
               </div>
            </h1>
            <div className="singlePostInfo">
               <span className="singlePostAuthor">
                  Author: <b>Mohammad</b>
               </span>
               <span className="singlePostSate">1 hour ago</span>
            </div>
            <p className="singlePostDescription">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
               ipsum! Ut unde, doloribus, dolorum praesentium et temporibus cum
               fugit necessitatibus dicta architecto ducimus eos obcaecati quia
               reiciendis sed harum blanditiis? Lorem ipsum, dolor sit amet
               consectetur adipisicing elit. Velit, ipsum! Ut unde, doloribus,
               dolorum praesentium et temporibus cum fugit necessitatibus dicta
               architecto ducimus eos obcaecati quia reiciendis sed harum
               blanditiis? Lorem ipsum, dolor sit amet consectetur adipisicing
               elit. Velit, ipsum! Ut unde, doloribus, dolorum praesentium et
               temporibus cum fugit necessitatibus dicta architecto ducimus eos
               obcaecati quia reiciendis sed harum blanditiis? Lorem ipsum,
               dolor sit amet consectetur adipisicing elit. Velit, ipsum! Ut
               unde, doloribus, dolorum praesentium et temporibus cum fugit
               necessitatibus dicta architecto ducimus eos obcaecati quia
               reiciendis sed harum blanditiis?
            </p>
         </div>
      </div>
   );
}
