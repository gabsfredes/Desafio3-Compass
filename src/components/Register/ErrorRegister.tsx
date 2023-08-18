import ReactModal from "react-modal";

interface ErrorRegisterProps {
  isOpen: boolean;
  onConfirm: () => void;
  children: React.ReactNode;
}

const ErrorRegister: React.FC<ErrorRegisterProps> = ({
  isOpen,
  onConfirm,
  children,
}) => {
  return (
    <ReactModal isOpen={isOpen}>
      <div className="modal">
        <h2>Oops!</h2>
        <p>{children}</p>
        <div className="buttons">
          <button className="btn modal_btn sign" onClick={onConfirm}>
            Ok
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default ErrorRegister;