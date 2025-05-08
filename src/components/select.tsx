type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
};

function Select({ value, setValue, disabled }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setValue(event.target.value);

  return (
    <select
      name="level"
      id="level"
      disabled={disabled}
      value={value}
      onChange={handleChange}
      className="px-4 py-3 bg-white border border-gray-400 rounded-md shadow-sm w-full md:w-[calc(100%-4.91rem)]"
    >
      <option value="Facile">Facile (1-50)</option>
      <option value="Moyen">Moyen (1-100)</option>
      <option value="Difficile">Difficile (1-200)</option>
    </select>
  );
}

export default Select;
