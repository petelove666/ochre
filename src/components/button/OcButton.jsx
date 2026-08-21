import "./OcButton.css";

export function OcButton({ children, type = "button", disabled = false, onClick }) {

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className="oc-button"
		>
			{children}
		</button>
	);
}

export default OcButton;
