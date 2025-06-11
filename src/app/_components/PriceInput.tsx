interface PriceInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  onBlur: () => void;
  min: number;
  max: number;
}

export const PriceInput: React.FC<PriceInputProps> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  min,
  max,
}) => {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="block text-sm text-gray-600 mb-1">
        {label}
      </label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        onBlur={onBlur}
        min={min}
        max={max}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}; 