import myPhoto from "../../images/photo.jpg";

export default function Skils() {
  return (
    <div className="skills">
      <div className="skills__handler">
        <p className="skills__handler__title">Мои навыки</p>
        <div className="skills__handler__item">
          <p className="skills__handler__item__title">JavaScript</p>
          <div
            className="skills__handler__item__value"
            style={{
              gridTemplateColumns: "80% 20%",
            }}
          >
            <div style={{ backgroundColor: "#34547a" }}></div>
            <div style={{ backgroundColor: "#c4c4c4" }}></div>
          </div>
        </div>
        <div className="skills__handler__item">
          <p className="skills__handler__item__title">React.js</p>
          <div
            className="skills__handler__item__value"
            style={{
              gridTemplateColumns: "75% 25%",
            }}
          >
            <div style={{ backgroundColor: "#34547a" }}></div>
            <div style={{ backgroundColor: "#c4c4c4" }}></div>
          </div>
        </div>
        <div className="skills__handler__item">
          <p className="skills__handler__item__title">Vue.js</p>
          <div
            className="skills__handler__item__value"
            style={{
              gridTemplateColumns: "50% 50%",
            }}
          >
            <div style={{ backgroundColor: "#34547a" }}></div>
            <div style={{ backgroundColor: "#c4c4c4" }}></div>
          </div>
        </div>
        <div className="skills__handler__item">
          <p className="skills__handler__item__title">Unity Engine</p>
          <div
            className="skills__handler__item__value"
            style={{
              gridTemplateColumns: "80% 20%",
            }}
          >
            <div style={{ backgroundColor: "#34547a" }}></div>
            <div style={{ backgroundColor: "#c4c4c4" }}></div>
          </div>
        </div>
        <div className="skills__handler__item">
          <p className="skills__handler__item__title">C#</p>
          <div
            className="skills__handler__item__value"
            style={{
              gridTemplateColumns: "85% 15%",
            }}
          >
            <div style={{ backgroundColor: "#34547a" }}></div>
            <div style={{ backgroundColor: "#c4c4c4" }}></div>
          </div>
        </div>
      </div>
      <div className="skills__photo">
        <img src={myPhoto} />
      </div>
    </div>
  );
}
