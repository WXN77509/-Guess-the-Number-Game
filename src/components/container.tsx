import { useState } from "react";
import * as lib from "../lib/lib";
import Select from "./select";
import Paragraph from "./paragraph";
import Indication from "./indication";
import Input from "./input";
import Button from "./button";
import Div from "./div";

function Container() {
  const [levelSelect, setLevelSelect] = useState<string>("Facile");
  const [disabledSelect, setDisabledSelect] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [disabledInput, setDisabledInput] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [removeDiv, setRemoveDiv] = useState<boolean>(true);
  const [numberAtGuess, setNumberAtGuess] = useState<number>(0);
  const [trials, setTrials] = useState<number>(10);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [isWinOrLoseOrNoTrials, setisWinOrLoseOrNoTrials] = useState<
    "Win" | "Lose" | "No trials" | null
  >(null);

  return (
    <section className="rounded-md shadow-[2px_2px_4px_gray] flex justify-start items-start flex-col p-8 gap-6">
      <div className="flex flex-col items-start md:flex-row md:items-center w-full gap-4">
        <Paragraph />
        <Select
          value={levelSelect}
          setValue={setLevelSelect}
          disabled={disabledSelect}
        />
      </div>

      <div className="flex flex-col justify-start items-start w-full gap-4">
        <Indication
          levelSelect={lib.getSelectedValue(levelSelect)}
          trials={trials}
        />
        <span className="flex flex-col gap-5 w-full md:inline-flex md:flex-row md:gap-2">
          <Input
            value={input}
            setValue={setInput}
            levelSelect={levelSelect}
            disabledInput={disabledInput}
          />
          <Button
            setisWinOrLoseOrNoTrials={setisWinOrLoseOrNoTrials}
            levelSelect={levelSelect}
            setDisabledSelect={setDisabledSelect}
            input={input}
            disabledButton={disabledButton}
            setInput={setInput}
            setRemoveDiv={setRemoveDiv}
            numberAtGuess={numberAtGuess}
            setNumberAtGuess={setNumberAtGuess}
            trials={trials}
            setTrials={setTrials}
            numbers={numbers}
            setNumbers={setNumbers}
          />
        </span>
      </div>
      <Div
        removeDiv={removeDiv}
        isWinOrLoseOrNoTrials={isWinOrLoseOrNoTrials}
        setDisabledInput={setDisabledInput}
        setDisabledButton={setDisabledButton}
        numberAtGuess={numberAtGuess}
        numbers={numbers}
      ></Div>
    </section>
  );
}

export default Container;
