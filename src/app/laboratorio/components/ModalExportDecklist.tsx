import { Modal } from "@/components/Modal/Modal"
import { DocumentDuplicateIcon, XMarkIcon } from "@heroicons/react/24/solid"

interface Props {
  code: string;
  close: () => void;
}

export const ModalExportDecklist = ({code, close}: Props) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  }

  return (
    <Modal css="lg:w-1/3 md:w-1/2 w-full mx-4">
        <div className="text-center"> 
              <h1 className="text-white font-bold text-2xl bg-primary p-3 mb-4">Código del Mazo</h1>
              <p className="text-black px-6 mb-4">Copia este código para compartir este mazo con tus amigos.</p>
              <div className="text-indigo-500 mx-5 mb-4 p-5 border-dotted border-2 border-indigo-500 relative">
                <p className="break-words">{code}</p>
                <div 
                  className="absolute top-0 right-0 bg-primary bg-primary-h text-white p-1 cursor-pointer"
                  onClick={copyToClipboard}
                >
                    <DocumentDuplicateIcon className="w-4 m-auto"/>
                  </div>
              </div>
        </div>
        <div className="absolute top-0 right-0 mr-1 mt-1 bg-primary hover:bg-indigo-300 p-2 cursor-pointer ease-out duration-300" onClick={close}>
            <XMarkIcon className="h-6 w-6 text-white"/>
        </div>
    </Modal>
  )
}
