import ReactModal from "react-modal";

interface ErrorLoginProps {
  isOpen: boolean;
  onConfirm: () => void;
}

const ErrorLogin: React.FC<ErrorLoginProps> = ({
  isOpen,
  onConfirm,
}) => {
  return (
    <ReactModal isOpen={isOpen}>
      <div className="modal">
        <h2>Error!</h2>
        <p>Invalid password or username, please try again.</p>
        <div className="buttons">
          <button className="btn modal_btn sign" onClick={onConfirm}>
            Ok
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default ErrorLogin;