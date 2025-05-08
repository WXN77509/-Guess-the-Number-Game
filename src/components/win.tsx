type Props = {
  setDisabledInput: React.Dispatch<React.SetStateAction<boolean>>;
  setDisabledButton: React.Dispatch<React.SetStateAction<boolean>>;
  numberAtGuess: number;
  numbers: number[];
};

function Win({
  setDisabledInput,
  setDisabledButton,
  numberAtGuess,
  numbers
}: Props) {
  setDisabledInput(true);
  setDisabledButton(true);
  return (
    <>
      <div className="w-full">
        <p className="bg-emerald-100 w-full text-[1.25rem] p-4 text-emerald-800 font-medium rounded-lg text-center">
          Bravo! Vous avez trouvé le nombre!
        </p>
      </div>
      <div className="w-full">
        <p className="text-[1.1rem] font-bold mb-4">
          {numbers.length > 1 ? "Essais précédents" : "Essai précédent"}
        </p>
        <ul className="list-none w-full flex flex-row flex-wrap gap-2">
          {numbers.map((value) => {
            let style: string = "text-center text-[1.1rem] rounded-lg p-3 ";
            if (value > numberAtGuess) {
              style += "bg-orange-100 text-orange-800";
            } else if (value < numberAtGuess) {
              style += "bg-blue-100 text-blue-800";
            } else if (value === numberAtGuess) {
              style += "bg-emerald-100 text-emerald-800";
            }

            return (
              <li key={value} className={style}>
                {value}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        type="button"
        onClick={() => {
          window.location.reload();
        }}
        className="w-full border-none mt-4 bg-purple-500 font-medium text-[1.1rem] text-white p-4 rounded-lg hover:bg-red-500 active:bg-blue-500"
      >
        Nouvelle partie
      </button>
    </>
  );
}

export default Win;
