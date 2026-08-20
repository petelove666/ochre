import "./Toggle.css";

export default function Toggle({
	toggleName = "toggle",
	options = [],
	selectedValue,
}) {
	const hasExplicitSelected = options.some(
		({ selected }) => selected !== null && selected !== undefined,
	);

	return (
		<div className="oc-toggle">
			{options.map(({ label, value, selected }, index) => {
				const id = `${toggleName}-${value}`;
				const shouldDefaultToFirst =
					!hasExplicitSelected && selectedValue == null && index === 0;

				return (
					<label key={id} htmlFor={id} className="oc-toggle__option">
						<input
							id={id}
							type="radio"
							name={toggleName}
							value={value}
							defaultChecked={
								selected ?? (value === selectedValue || shouldDefaultToFirst)
							}
							className="oc-toggle__input"
						/>
						<span className="oc-toggle__label">{label}</span>
					</label>
				);
			})}
		</div>
	);
}
