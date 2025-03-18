export default function ModalFuncao({
  funcionalidade,
  isModalOpen,
  setIsModalOpen,
}) {
  const handleClickOutside = (event) => {
    if (event.target.id === `modalFuncao${funcionalidade.titulo}`) {
      handleClose();
    }
  };

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div
        id={`modalFuncao${funcionalidade.titulo}`}
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          isModalOpen ? "block" : "hidden"
        }`}
        onClick={handleClickOutside}
      >
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div
            className="p-8 flex flex-col md:flex-row gap-3 rounded-xl shadow-xl max-w-xl transform transition duration-300 hover:scale-105 m-3"
            style={{ backgroundColor: funcionalidade.cor }}
          >
            <button
              type="button"
              className="absolute top-0 right-0 p-3 py-2 text-xl hover:text-red-600 "
              onClick={handleClose}
            >
              X
            </button>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">{funcionalidade.titulo}</h2>
              <p className="text-lg">{funcionalidade.descricao}</p>
            </div>
            <div className="flex items-center justify-center w-full h-auto">
              <img
                src={funcionalidade.imagem}
                alt={funcionalidade.titulo}
                className="rounded-lg max-w-[200px] w-full h-auto aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
