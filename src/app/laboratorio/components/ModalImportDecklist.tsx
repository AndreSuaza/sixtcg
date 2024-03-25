import { Modal } from "@/components/Modal/Modal"
import { DocumentDuplicateIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react";

interface Props {
  close: () => void;
  importDeck: (code:string) => void;
}

export const ModalImportDecklist = ({close , importDeck}: Props) => {

  const [code, setCode] = useState("");

  const onInputChange = ({target}: any) => {
    console.log(target.value);
    setCode(target.value);
  }

  const setImportDeck = () => {
    importDeck(code);
    close();
  }

  return (
    <Modal css="lg:w-1/3 md:w-1/2 w-full mx-4">
        <div className="text-center"> 
              <h1 className="text-white font-bold text-2xl bg-primary p-3 mb-4">Ingresa el código de tu Mazo</h1>
              <p className="text-black px-6 mb-4">Pega el código de tu mazo y veras todas las cartas que contiene.</p>
              <div className="text-indigo-500 mx-5 mb-2 border-dotted border-2 border-indigo-500 relative">
                <textarea 
                  className="w-full h-28 p-2"
                  onChange={onInputChange}
                  defaultValue={code}
                  placeholder="Pega el código del mazo aquí."
                />
              </div>
              <button className="btn mb-4 bg-primary-h" onClick={setImportDeck}>Cargar Mazo</button>
        </div>
        <div className="absolute top-0 right-0 mr-1 mt-1 bg-primary hover:bg-indigo-300 p-2 cursor-pointer ease-out duration-300" onClick={close}>
            <XMarkIcon className="h-6 w-6 text-white"/>
        </div>
    </Modal>
  )
}
