type Props = {
  numberAtGuess: number;
  numbers: number[];
};

function Lose({ numberAtGuess, numbers }: Props) {
  const lastGuess = numbers[numbers.length - 1];
  const loseWord = lastGuess > numberAtGuess ? "grand" : "petit";
  return (
    <>
      <div className="w-full">
        <p className="w-full p-4 text-[1.25rem] font-medium rounded-lg text-center bg-blue-100 text-blue-800">
          Trop {loseWord} ! Essayez un nombre plus{" "}
          {loseWord === "petit" ? "grand" : "petit"}.
        </p>
      </div>
      <div className="w-full">
        <p className="text-[1.1rem] font-bold mb-4">
          {numbers.length > 1 ? "Essais précédents" : "Essai précédent"}
        </p>
        <ul className="list-none w-full flex flex-row flex-wrap gap-2">
          {numbers.map((value, index) => {
            let style: string = "text-center text-[1.1rem] rounded-lg p-3 ";
            if (value > numberAtGuess) {
              style += "bg-orange-100 text-orange-800";
            } else {
              style += "bg-blue-100 text-blue-800";
            }

            return (
              <li key={index} className={style}>
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Lose;
