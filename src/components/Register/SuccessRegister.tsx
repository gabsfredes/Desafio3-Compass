import ReactModal from "react-modal";

interface SuccessRegisterProps {
  isOpen: boolean;
  onConfirm: () => void;
}

const SuccessRegister: React.FC<SuccessRegisterProps> = ({
  isOpen,
  onConfirm,
}) => {
  return (
    <ReactModal isOpen={isOpen}>
      <div className="modal">
        <h2>Success!</h2>
        <p>Welcome to FitMe!</p>
        <p>Go to the login page and sign in.</p>
        <div className="buttons">
          <button className="btn modal_btn sign" onClick={onConfirm}>
            Go to Login
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default SuccessRegister;