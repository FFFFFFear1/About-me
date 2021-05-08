import { TextField, Input } from "@material-ui/core";

export default function ContactMe() {
  return (
    <div className="contact">
      <div className="contact__handler">
        <div>
          <div className="contact__handler__title">
            <p>Хотите веб-сайт?</p>
          </div>
          <div className="contact__handler__description">
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
          </div>
        </div>
        <form id="contact_form" className="contact__handler__form">
          <div className="contact__handler__form__inputs">
            <TextField
              id="standard-multiline-static"
              label="Вашe имя"
              variant="standard"
              required
            />
            <TextField
              id="standard-multiline-static"
              label="Ваш e-mail"
              variant="standard"
              inputProps={{
                pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
              }}
              required
            />
          </div>
          <TextField
            className="contact__handler__form__textarea"
            id="standard-multiline-static"
            label="Сообщение"
            multiline
            rows={4}
            variant="standard"
            required
          />
        </form>
        <button type="submit" form="contact_form">
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  );
}
