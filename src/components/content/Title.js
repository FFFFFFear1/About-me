import pcImage from "../../images/pc.png";

export default function Title() {
  return (
    <div id="main" className="title">
      <div className="title__container">
        <div className="title__container__image">
          <img src={pcImage} alt="pc_logo" />
        </div>
        <div className="title__container__discription">
          <div className="title__container__discription__title">
            <p>Верстка и геймдев</p>
          </div>
          <div className="title__container__discription__content">
            <p>
              Предлогаю услуги разработчика web-приложений и игр.
              <br />
              {/* <br /> */}
              Напишите мне ваши идеи и я придумаю как их реализовать.
            </p>
          </div>
          <button
            className="title__container__discription__btn"
            onClick={() => {
              window.open(`https://t.me/mne_rabotat_nado`);
            }}
          >
            НАПИСАТЬ МНЕ
          </button>
        </div>
      </div>
    </div>
  );
}
