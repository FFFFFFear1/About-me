import { useEffect, useCallback } from "react";
import Slider from "./Slider";

export default function ViewWorkModal(props) {
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      props.closeModal([]);
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  });

  return (
    <div className="modal">
      <div>
        <Slider modalData={props.modalData} />
      </div>
      <button className="modal__btn" onClick={() => props.closeModal([])}>
        ЗАКРЫТЬ
      </button>
    </div>
  );
}
