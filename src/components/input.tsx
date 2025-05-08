type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  levelSelect: string;
  disabledInput: boolean;
};

function Input({ value, setValue, levelSelect, disabledInput }: Props) {
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.value;
    const value = Number(field);

    if (field === "") {
      setValue("");
      return;
    }

    switch (levelSelect) {
      case "Facile":
        if (value > 50) {
          setValue("50");
          return;
        }
        break;
      case "Moyen":
        if (value > 100) {
          setValue("100");
          return;
        }
        break;
      case "Difficile":
        if (value > 200) {
          setValue("200");
          return;
        }
        break;
    }

    if (value < 1) {
      setValue("1");
      return;
    }

    setValue(field);
  };

  return (
    <input
      type="number"
      placeholder="Entrez votre estimation"
      disabled={disabledInput}
      value={value}
      onChange={onInput}
      className="p-4 bg-white border border-gray-400 rounded-lg shadow-sm w-full"
    ></input>
  );
}

export default Input;
