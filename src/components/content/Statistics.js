import projectIcon from "../../images/projectIcon.png";
import companyWork from "../../images/companyWork.png";
import exp from "../../images/exp.png";
import mishen from "../../images/mishen.png";

export default function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics__content">
        <div className="statistics__content__item">
          <div className="statistics__content__item__image">
            <img src={projectIcon} alt="projectIcon" />
          </div>
          <div className="statistics__content__item__parpams">
            <p style={{ fontWeight: "bold" }}>10+</p>
            <p>заказов</p>
          </div>
        </div>
        <div className="statistics__content__item">
          <div className="statistics__content__item__image">
            <img src={exp} alt="exp" />
          </div>
          <div className="statistics__content__item__parpams">
            <p style={{ fontWeight: "bold" }}>3 года+</p>
            <p>опыт работы</p>
          </div>
        </div>
        <div className="statistics__content__item">
          <div className="statistics__content__item__image">
            <img src={companyWork} alt="companyWork" />
          </div>
          <div className="statistics__content__item__parpams">
            <p style={{ fontWeight: "bold" }}>7+</p>
            <p>заказчиков</p>
          </div>
        </div>
        <div className="statistics__content__item">
          <div className="statistics__content__item__image">
            <img src={mishen} alt="mishen" />
          </div>
          <div className="statistics__content__item__parpams">
            <p style={{ fontWeight: "bold" }}>3+</p>
            <p>актуальных технологий</p>
          </div>
        </div>
      </div>
    </div>
  );
}
