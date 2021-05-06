export default function ViewWorkModal(props) {
  return (
    <div className="modal">
      <div style={{ width: "200px", height: "auto" }}>
        {props.modalData.images.map((image, index) => {
          return <img key={index} src={image} alt="info"></img>;
        })}
      </div>
      <button onClick={() => props.closeModal(null)}>exit</button>
    </div>
  );
}
