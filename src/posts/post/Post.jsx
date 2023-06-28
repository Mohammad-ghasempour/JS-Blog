import "./post.css";
import postImg from "../../Assets/images/nodejs-vs-python.jpeg";

export default function Post() {
   return (
      <div className="post">
         <img className="postImg" src={postImg} alt="imagePost" />
         <div className="postInfo">
            <div className="postCategories">
               <span className="postCat">Compare</span>
               <span className="postCat">Learn</span>
            </div>
            <h1 className="postTitle">Compare Javascript vs Python</h1>
            <span className="timeStamp">1 hour ago</span>
            <p className="description">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
               eius, magni dolores possimus iusto ipsum totam velit tenetur illo
               consequuntur veniam ad ipsa! Reiciendis perspiciatis quisquam
               similique neque vel cupiditate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
               eius, magni dolores possimus iusto ipsum totam velit tenetur illo
               consequuntur veniam ad ipsa! Reiciendis perspiciatis quisquam
               similique neque vel cupiditate!
            </p>
         </div>
      </div>
   );
}
