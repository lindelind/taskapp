
import "../style/Notification.css";

export const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">
        ✖
      </button>
    </div>
  );
};