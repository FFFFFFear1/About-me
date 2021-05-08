import jsImage from "../../images/Logos/js.png";
import cssImage from "../../images/Logos/css.png";
import htmlImage from "../../images/Logos/html.png";
import reactImage from "../../images/Logos/react.svg";
import nodeImage from "../../images/Logos/node.png";
import mongoImage from "../../images/Logos/mongo.png";
import unityImage from "../../images/Logos/unity.png";
import csharpImage from "../../images/Logos/c-sharp.png";

export default function TechList() {
  return (
    <div className="techList">
      <div className="techList__items">
        <div className="techList__items__item">
          <img src={jsImage} alt="jsImage"></img>
        </div>

        <div className="techList__items__item">
          <img src={cssImage} alt="cssImage"></img>
        </div>

        <div className="techList__items__item">
          <img src={htmlImage} alt="htmlImage"></img>
        </div>

        <div className="techList__items__item">
          <img src={reactImage} alt="reactImage"></img>
        </div>

        <div className="techList__items__item">
          <img src={nodeImage} alt="nodeImage"></img>
        </div>

        <div className="techList__items__item">
          <img src={mongoImage} alt="mongoImage"></img>
        </div>

        <div className="techList__items__item">
          <img src={unityImage} alt="unityImage"></img>
        </div>

        <div className="techList__items__item">
          <img src={csharpImage} alt="csharpImage"></img>
        </div>
      </div>
    </div>
  );
}
