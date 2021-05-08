import { useEffect, useCallback, useState } from "react";
import Slider from "./Slider";

export default function ViewWorkModal(props) {
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      console.log("asdas");
      props.closeModal([]);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

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
