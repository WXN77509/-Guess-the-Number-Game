import * as lib from "../lib/lib";

type Props = {
  setisWinOrLoseOrNoTrials: React.Dispatch<
    React.SetStateAction<"Win" | "Lose" | "No trials" | null>
  >;
  levelSelect: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setDisabledSelect: React.Dispatch<React.SetStateAction<boolean>>;
  disabledButton: boolean;
  setRemoveDiv: React.Dispatch<React.SetStateAction<boolean>>;
  numberAtGuess: number;
  setNumberAtGuess: React.Dispatch<React.SetStateAction<number>>;
  trials: number;
  setTrials: React.Dispatch<React.SetStateAction<number>>;
  numbers: number[];
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

function Button({
  setisWinOrLoseOrNoTrials,
  levelSelect,
  input,
  setInput,
  setDisabledSelect,
  disabledButton,
  setRemoveDiv,
  numberAtGuess,
  setNumberAtGuess,
  trials,
  setTrials,
  numbers,
  setNumbers
}: Props) {
  const onClick = () => {
    setDisabledSelect(true);
    setRemoveDiv(true);
    if (!numberAtGuess) {
      setNumberAtGuess(lib.gen_random(1, lib.getSelectedValue(levelSelect)));
    }

    const value = Number(input);
    if (isNaN(value)) {
      return;
    }

    const newNumbers = [...numbers, value];
    setTrials(trials - 1);

    if (value === numberAtGuess) {
      setisWinOrLoseOrNoTrials("Win");
    } else if (trials === 1) {
      setisWinOrLoseOrNoTrials("No trials");
    } else {
      setisWinOrLoseOrNoTrials("Lose");
    }
    setNumbers(newNumbers);
    setRemoveDiv(false);
    setInput("");
  };

  return (
    <button
      type="button"
      disabled={disabledButton}
      onClick={onClick}
      className="border-none bg-[rgb(168,85,247)] font-semibold text-[1.1rem] text-white  py-4 px-5 rounded-md w-full md:w-1/5 hover:bg-red-500 active:bg-blue-500"
    >
      Deviner
    </button>
  );
}

export default Button;
