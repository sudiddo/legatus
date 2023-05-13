import React from "react";
import Modal from ".";
import useCropModalLogic from "@/hooks/useCropModalLogic";
import { ModalSectionTitle } from "../label";
import { ModalInput } from "../inputs";
import ModalTextArea from "../inputs/ModalTextArea";

type CropProductionModalProps = ReturnType<typeof useCropModalLogic>;

const CropProductionModal: React.FC<CropProductionModalProps> = ({
  x,
  setX,
  y,
  setY,
  firstReport,
  setFirstReport,
  secondReport,
  setSecondReport,
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
        <ModalSectionTitle title="Report Parsing" />
        <p className="text-xs italic">
          <span className="font-bold">How to: </span>With ease, select all and
          copy the scout report from Travian, and then paste it here to make the
          tool work its magic!
        </p>
        <ModalTextArea
          placeholder="Paste your report here"
          name="first-report"
          value={firstReport}
          onChange={(e) => setFirstReport(e.target.value)}
          label="First Report"
          required
        />
        <ModalTextArea
          placeholder="Paste your report here"
          name="second-report"
          value={secondReport}
          onChange={(e) => setSecondReport(e.target.value)}
          label="Second Report"
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
