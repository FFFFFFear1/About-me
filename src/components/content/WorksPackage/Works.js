import iTinder from "../../../images/iTinder/Title.png";
import CashStream from "../../../images/CashStream/Title.png";
import NuxtShop from "../../../images/NuxtShop/Title.png";
import Turtle from "../../../images/Turtle/Title.png";
import Skillbox from "../../../images/Skillbox/Title.png";
import ShyHole from "../../../images/ShyHole/Title.png";
import SpaceX from "../../../images/SpaceX/Title.png";
import FroggingOut from "../../../images/FroggingOut/Title.png";

export default function Works() {
  return (
    <div className="works">
      <div
        className="works__item"
        style={{
          backgroundImage: `url(${iTinder})`,
        }}
      ></div>
      <div
        className="works__item"
        style={{
          backgroundImage: `url(${CashStream})`,
        }}
      ></div>
      <div
        className="works__item"
        style={{
          backgroundImage: `url(${NuxtShop})`,
        }}
      ></div>
      <div
        className="works__item"
        style={{
          backgroundImage: `url(${Turtle})`,
        }}
      ></div>
      <div
        className="works__item"
        style={{
          backgroundImage: `url(${Skillbox})`,
        }}
      ></div>
      <div
        className="works__item"
        style={{
          backgroundImage: `url(${ShyHole})`,
        }}
      ></div>
      <div
        className="works__item"
        style={{
          backgroundImage: `url(${SpaceX})`,
        }}
      ></div>
      <div
        className="works__item"
        style={{
          backgroundImage: `url(${FroggingOut})`,
        }}
      ></div>
    </div>
  );
}
