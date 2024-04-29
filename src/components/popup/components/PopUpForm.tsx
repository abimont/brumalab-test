import React, { useState } from "react";


const PopUpForm = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debes aceptar los términos de uso para continuar.");
      return;
    }
    setOpenModal(false)
    alert("Te has suscrito exitosamente")
  };

  return (
    <form onSubmit={handleSubmit} className="justify-start">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
        className="mt-4 p-2 w-full border text-gray-950 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => {
          const formattedPhone = e.target.value.replace(/\D/g, '').slice(0, 10);
          setPhone(formattedPhone);
        }}
        placeholder="Teléfono"
        className="mt-4 p-2 w-full border text-gray-950 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <div className="mt-4 text-left flex align-middle">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="mr-2"
          required
        />
        <label htmlFor="termsAccepted" className="text-gray-950 text-sm">
          Al suscribirte, aceptas la Política de privacidad y los Términos de
          uso.
        </label>
      </div>
      <button
        type="submit"
        className="my-8 py-2 bg-black text-white rounded-full w-full"
      >
        Suscribir
      </button>
    </form>
  );
};

export default PopUpForm;
