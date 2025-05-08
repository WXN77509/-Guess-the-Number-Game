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

    if (trials <= 0) {
      setisWinOrLoseOrNoTrials("No trials");
    }

    const value = Number(input);
    const newArray = [...numbers];

    newArray.push(value);
    setNumbers(newArray);

    if (value === numberAtGuess) {
      setisWinOrLoseOrNoTrials("Win");
    } else {
      setisWinOrLoseOrNoTrials("Lose");
      setTrials(trials - 1);
    }
    setInput("");
    setRemoveDiv(false);
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
