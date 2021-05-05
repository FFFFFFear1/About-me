import pcImage from "../../images/pc.png";

export default function Title() {
  return (
    <div className="title">
      <div className="title__container">
        <div className="title__container__image">
          <img src={pcImage} alt="pc_logo" />
        </div>
        <div className="title__container__discription">
          <div className="title__container__discription__title">
            <p>Дизайн и верстка</p>
          </div>
          <div className="title__container__discription__content">
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
          </div>
          <button className="title__container__discription__btn">
            НАПИСАТЬ МНЕ
          </button>
        </div>
      </div>
    </div>
  );
}
