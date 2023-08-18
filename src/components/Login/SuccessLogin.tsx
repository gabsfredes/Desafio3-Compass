import ReactModal from "react-modal";

interface SuccessLoginProps {
  isOpen: boolean;
  onConfirm: () => void;
}

const SuccessLogin: React.FC<SuccessLoginProps> = ({
  isOpen,
  onConfirm,
}) => {
  return (
    <ReactModal isOpen={isOpen}>
      <div className="modal">
        <h2>Success!</h2>
        <p>You are logged now.</p>
        <div className="buttons">
          <button className="btn modal_btn sign" onClick={onConfirm}>
            Ok
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default SuccessLogin;