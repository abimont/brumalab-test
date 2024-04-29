import Image from "next/image";
import PopUpForm from "./components/PopUpForm";

const PopUp = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  return (
    <div className="fixed z-50 inset-y-5 lg:right-5 lg:p-0 px-5 flex items-center justify-center overflow-hidden ">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <div className="bg-white flex items-center justify-center flex-col rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full h-full animate-slideInRight">
        <div className="overflow-y-scroll lg:p-16 p-10 modal">
          <div className="absolute right-8 top-7">
            <button onClick={() => setOpenModal(false)}>
              <img
                src="/xVector.svg"
                alt=""
                className="rounded-full bg-slate-200 p-2"
              />
            </button>
          </div>
          <Image
            src="/scooterElectricoMinca800w.png"
            width={370}
            height={370}
            alt="Scooter Eléctrico Minca 800w"
            className="mt-7"
          />
          <div className="bg-white text-center">
            <h1 className="text-2xl leading-10 tracking-wide font-semibold text-gray-900 pt-5">
              ¡Gana un scooter eléctrico Minca 800W GRATIS!
            </h1>
            <PopUpForm setOpenModal={setOpenModal} />
            <span className="text-sm   text-gray-900">
              Cuando se registra para recibir actualizaciones por correo
              electrónico, tiene la oportunidad de ganar un scooter eléctrico
              Minca 800W gratis por un valor de $3.990.000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
