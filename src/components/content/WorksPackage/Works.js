import iTinder from "../../../images/iTinder/Title.png";
import CashStream from "../../../images/CashStream/Title.png";
import NuxtShop from "../../../images/NuxtShop/Title.png";
import Turtle from "../../../images/Turtle/Title.png";
import Skillbox from "../../../images/Skillbox/Title.png";
import ShyHole from "../../../images/ShyHole/Title.png";
import SpaceX from "../../../images/SpaceX/Title.png";
import FroggingOut from "../../../images/FroggingOut/Title.png";
import React, { useEffect, useState } from "react";
import ViewWorkModal from "./ViewWorkModal";

export default function Works() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  function interactionModal(modalInfo) {
    setModalData(modalInfo);
    setOpenModal(!openModal);
  }

  function importAll(r) {
    return r.keys().map(r);
  }

  return (
    <div id="works" className="works">
      <div
        onClick={() =>
          interactionModal(
            importAll(
              require.context(
                "../../../images/iTinder/",
                false,
                /\.(png|jpe?g|svg)$/
              )
            )
          )
        }
        className="works__item"
        style={{
          backgroundImage: `url(${iTinder})`,
        }}
      ></div>
      <div
        onClick={() =>
          interactionModal(
            importAll(
              require.context(
                "../../../images/CashStream/",
                false,
                /\.(png|jpe?g|svg)$/
              )
            )
          )
        }
        className="works__item"
        style={{
          backgroundImage: `url(${CashStream})`,
        }}
      ></div>
      <div
        onClick={() =>
          interactionModal(
            importAll(
              require.context(
                "../../../images/NuxtShop/",
                false,
                /\.(png|jpe?g|svg)$/
              )
            )
          )
        }
        className="works__item"
        style={{
          backgroundImage: `url(${NuxtShop})`,
        }}
      ></div>
      <div
        onClick={() =>
          interactionModal(
            importAll(
              require.context(
                "../../../images/Turtle/",
                false,
                /\.(png|jpe?g|svg)$/
              )
            )
          )
        }
        className="works__item"
        style={{
          backgroundImage: `url(${Turtle})`,
        }}
      ></div>
      <div
        onClick={() =>
          interactionModal(
            importAll(
              require.context(
                "../../../images/Skillbox/",
                false,
                /\.(png|jpe?g|svg)$/
              )
            )
          )
        }
        className="works__item"
        style={{
          backgroundImage: `url(${Skillbox})`,
        }}
      ></div>
      <div
        onClick={() =>
          interactionModal(
            importAll(
              require.context(
                "../../../images/ShyHole/",
                false,
                /\.(png|jpe?g|svg)$/
              )
            )
          )
        }
        className="works__item"
        style={{
          backgroundImage: `url(${ShyHole})`,
        }}
      ></div>
      <div
        onClick={() =>
          interactionModal(
            importAll(
              require.context(
                "../../../images/SpaceX/",
                false,
                /\.(png|jpe?g|svg)$/
              )
            )
          )
        }
        className="works__item"
        style={{
          backgroundImage: `url(${SpaceX})`,
        }}
      ></div>
      <div
        onClick={() =>
          interactionModal(
            importAll(
              require.context(
                "../../../images/FroggingOut/",
                false,
                /\.(png|jpe?g|svg)$/
              )
            )
          )
        }
        className="works__item"
        style={{
          backgroundImage: `url(${FroggingOut})`,
        }}
      ></div>
      {openModal && (
        <ViewWorkModal closeModal={interactionModal} modalData={modalData} />
      )}
    </div>
  );
}
