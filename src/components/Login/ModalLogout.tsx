import ReactModal from "react-modal";

interface LogoutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
}) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="modal">
        <h2>Confirm Logout?</h2>
        <p>Are you sure you want to logout?</p>
        <div className="buttons">
          <button className="btn modal_btn sign" onClick={onRequestClose}>
            No
          </button>
          <button className="btn modal_btn sign" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default LogoutModal;
