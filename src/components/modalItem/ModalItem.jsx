const ModalItem = ({ item, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  );
}

export default ModalItem;