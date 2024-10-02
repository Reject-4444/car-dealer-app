interface DropdownProps {
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    placeholder: string;
    disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, placeholder, disabled }) => {
    return (
        <select onChange={(e) => onChange(e.target.value)} disabled={disabled} className="border p-2 rounded">
            <option value={placeholder}>{placeholder}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default Dropdown;
