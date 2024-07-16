import { CardView } from "@/components";
import { Modal } from "@/components/Modal/Modal"
import { Card } from "@/models";
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react";
import { ListCardsDeck } from "./ListCardsDeck";

interface Props {
  close: () => void;
  deckMain: Card[];
  deckLimbo: Card[];
  deckMana: Card[];
}

export const ModalImageDecklist = ({close, deckMain, deckLimbo, deckMana}: Props) => {

  return (
    <Modal css="w-full h-full bg-black bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat">
        <h1 className="text-white font-bold text-2xl bg-primary p-3 mb-4">Mazo</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
          <div className="lg:col-span-2 md:col-span-2 col-span-1"> 
               
          </div>
          
        </div>
        <div className="absolute top-0 right-0 mr-1 mt-1 bg-primary hover:bg-indigo-300 p-2 cursor-pointer ease-out duration-300" onClick={close}>
            <XMarkIcon className="h-6 w-6 text-white"/>
        </div>
    </Modal>
  )
}
