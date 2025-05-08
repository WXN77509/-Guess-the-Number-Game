type Props = { levelSelect: number; trials: number };
function Indication({ levelSelect, trials }: Props) {
  return (
    <p className="text-gray-600">
      Devinez un nombre entre 1 et {levelSelect}. Vous avez {trials}{" "}
      {trials === 1 ? "essai" : "essais"} restant.
    </p>
  );
}

export default Indication;
