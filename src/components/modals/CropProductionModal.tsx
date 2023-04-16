import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

interface CropProductionModalProps {
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
  x: string;
  setX: React.Dispatch<React.SetStateAction<string>>;
  y: string;
  setY: React.Dispatch<React.SetStateAction<string>>;
  isCap: boolean;
  setIsCap: React.Dispatch<React.SetStateAction<boolean>>;
  cropFields: React.Dispatch<React.SetStateAction<string>>;
  setCropFields: React.Dispatch<React.SetStateAction<string>>;
  oasisBonus: React.Dispatch<React.SetStateAction<string>>;
  setOasisBonus: React.Dispatch<React.SetStateAction<string>>;
  crops1: string;
  setCrops1: React.Dispatch<React.SetStateAction<string>>;
  crops2: string;
  setCrops2: React.Dispatch<React.SetStateAction<string>>;
  timeGap: string;
  setTimeGap: React.Dispatch<React.SetStateAction<string>>;
  isOasis: boolean;
  setIsOasis: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CropProductionModal({
  player,
  setPlayer,
  x,
  setX,
  y,
  setY,
  isCap,
  setIsCap,
  oasisBonus,
  setOasisBonus,
  cropFields,
  setCropFields,
  crops1,
  setCrops1,
  crops2,
  setCrops2,
  timeGap,
  setTimeGap,
  isOasis,
  setIsOasis,
  handleSubmit,
  isOpen,
  setIsOpen,
}: CropProductionModalProps) {
  function closeModal() {
    setIsOpen(false);
  }
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
                  Crops Calculator
                  <hr className="my-2 border-black" />
                </Dialog.Title>
                {/* Information */}
                <div className="mb-3 grid grid-rows-1 gap-3 text-black">
                  <div className="">
                    <p className="text-xs font-bold">Player Informations</p>
                    <hr />
                  </div>
                  <div>
                    <p className="mb-1">Player Name</p>
                    <input
                      type="text"
                      name="player"
                      id="player"
                      className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                      placeholder="Player"
                      value={player}
                      onChange={(e) => setPlayer(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="mb-1">Coordinates</p>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="number"
                        name="x"
                        id="x"
                        className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        placeholder="x"
                        value={x}
                        // setX is a function that takes a number and returns void
                        // x can be a negative number
                        onChange={(e) => setX(e.target.value)}
                      />
                      <input
                        type="number"
                        name="y"
                        id="y"
                        className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                        placeholder="y"
                        value={y}
                        onChange={(e) => setY(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="cap"
                      id="cap"
                      value={isCap}
                      onChange={(e) => setIsCap(!isCap)}
                    />
                    <label for="cap"> Cap </label>

                    <select
                      name="crop-fields"
                      id="crop-field"
                      value={cropFields}
                      onChange={(e) => setCropFields(e.target.value)}
                    >
                      <option value="6" selected>6c</option>
                      <option value="7">7c</option>
                      <option value="9">9c</option>
                      <option value="15">15c</option>
                      <option value="18">18c</option>
                    </select>

                    <select
                      name="oasis-bonus"
                      id="oasis-bonus"
                      value={oasisBonus}
                      onChange={(e) => setOasisBonus(e.target.value)}
                    >
                      <option value="0" selected>0%</option>
                      <option value="25">25%</option>
                      <option value="50">50%</option>
                      <option value="75">75%</option>
                      <option value="125">125%</option>
                      <option value="150">150%</option>
                    </select>
                  </div>
                </div>
                {/* Crop Counts */}
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-xs font-bold">Crop Counts</p>
                    <hr />
                  </div>
                  <div>
                    <p>
                      First Scout
                      <span className="ml-1 text-red-400">*</span>
                    </p>
                    <input
                      type="number"
                      name="crops-1"
                      id="crops-1"
                      className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                      placeholder="Crops"
                      value={crops1}
                      onChange={(e) => setCrops1(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>
                      Second Scout
                      <span className="ml-1 text-red-400">*</span>
                    </p>
                    <input
                      type="number"
                      name="crops-2"
                      id="crops-2"
                      className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                      placeholder="Crops"
                      value={crops2}
                      onChange={(e) => setCrops2(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>
                      Time Gap (in seconds)
                      {/* <span className="ml-1 text-red-400">*</span> */}
                    </p>
                    <input
                      type="number"
                      name="time-gap"
                      id="time-gap"
                      className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                      placeholder="10"
                      value={timeGap}
                      onChange={(e) => setTimeGap(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="oasis"
                      id="oasis"
                      value={isOasis}
                      onChange={(e) => setIsOasis(!isOasis)}
                    />
                    <label for="oasis"> Is on Oasis </label>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="mt-5 h-10 w-full rounded-md border border-blue-700 bg-blue-600 text-lg font-semibold text-white transition-transform duration-75 hover:scale-95 active:scale-90"
                >
                  Calculate
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CropProductionModal;
