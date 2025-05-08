function Header() {
  return (
    <header className="flex justify-start items-center flex-row">
      <img src="/brain.png" alt="picture of brain" className="w-8" />
      <div className="flex justify-center items-start flex-col p-4">
        <h1 className="text-[26px] font-bold m-0">Devine le Nombre</h1>
        <p className="m-0 text-gray-600">
          Un jeu de logique et d'estimation pour développer votre intuition
          mathématique.
        </p>
      </div>
    </header>
  );
}

export default Header;
