import Win from "./win";
import Lose from "./lose";
import NoTrials from "./no-trials";

type Props = {
  removeDiv: boolean;
  isWinOrLoseOrNoTrials: "Win" | "Lose" | "No trials" | null;
  setDisabledInput: React.Dispatch<React.SetStateAction<boolean>>;
  setDisabledButton: React.Dispatch<React.SetStateAction<boolean>>;
  numberAtGuess: number;
  numbers: number[];
};

function Div({
  removeDiv,
  isWinOrLoseOrNoTrials,
  setDisabledInput,
  setDisabledButton,
  numberAtGuess,
  numbers
}: Props) {
  if (removeDiv === true) return null;

  switch (isWinOrLoseOrNoTrials) {
    case "Win":
      return (
        <Win
          setDisabledInput={setDisabledInput}
          setDisabledButton={setDisabledButton}
          numbers={numbers}
          numberAtGuess={numberAtGuess}
        ></Win>
      );
      break;
    case "Lose":
      return <Lose numberAtGuess={numberAtGuess} numbers={numbers}></Lose>;
      break;
    case "No trials":
      return (
        <NoTrials
          setDisabledInput={setDisabledInput}
          setDisabledButton={setDisabledButton}
          numberAtGuess={numberAtGuess}
          numbers={numbers}
        ></NoTrials>
      );
      break;
    default:
      return null;
  }
}

export default Div;
