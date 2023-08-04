import "./header.css";
import HeaderImage from "../../Assets/images/JavascriptBanner.jpg";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSmall">Javascript & Node.js</span>
            <span className="headerTitleLarge">JS Blog</span>
        </div>
        

        <img className="headerImg" src={HeaderImage} alt="dddd" />
    </div>
  )
}
