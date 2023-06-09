import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment } from "react";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  title: string;
};

function Modal({ isOpen, closeModal, children, title }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border-2 border-blue-900 bg-white p-6 text-left align-middle shadow-xl shadow-blue-300 transition-all">
                <Dialog.Title
                  as="h3"
                  className="mb-4 font-legatus text-xl font-semibold leading-6 text-black"
                >
                  {title}
                  <hr className="my-2 border-black" />
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
