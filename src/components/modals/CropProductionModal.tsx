import React from "react";
import Modal from ".";
import useCropModalLogic from "@/hooks/useCropModalLogic";
import { ModalSectionTitle } from "../label";
import { ModalInput } from "../inputs";

type CropProductionModalProps = ReturnType<typeof useCropModalLogic>;

const CropProductionModal: React.FC<CropProductionModalProps> = ({
  player,
  setPlayer,
  x,
  setX,
  y,
  setY,
  crops1,
  setCrops1,
  crops2,
  setCrops2,
  handleSubmit,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal
      closeModal={() => setIsOpen(false)}
      isOpen={isOpen}
      title="Crops Calculator"
    >
      {/* Information */}
      <div className="mb-3 grid grid-rows-1 gap-3 text-black">
        <ModalSectionTitle title="Player Informations" />
        <ModalInput
          placeholder="Player Name"
          label="Player Name"
          type="text"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
        <div>
          <p className="mb-1">Coordinates</p>
          <div className="grid grid-cols-2 gap-3">
            <ModalInput
              placeholder="x"
              type="number"
              value={x}
              onChange={(e) => setX(e.target.value)}
            />
            <ModalInput
              type="number"
              placeholder="y"
              value={y}
              onChange={(e) => setY(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Crop Counts */}
      <div className="grid grid-cols-1 gap-3">
        <ModalSectionTitle title="Crop Counts" />
        <ModalInput
          type="number"
          placeholder="Crops"
          name="crops-1"
          value={crops1}
          onChange={(e) => setCrops1(e.target.value)}
          label="First Scout"
          required
        />
        <ModalInput
          type="number"
          placeholder="Crops"
          name="crops-2"
          value={crops2}
          onChange={(e) => setCrops2(e.target.value)}
          label="Second Scout"
          required
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-5 h-10 w-full rounded-md border border-blue-700 bg-blue-600 text-lg font-semibold text-white transition-transform duration-75 hover:scale-95 active:scale-90"
      >
        Calculate
      </button>
    </Modal>
  );
};

export default CropProductionModal;
