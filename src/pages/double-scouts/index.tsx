import CropProductionModal from "@/components/modals/CropProductionModal";
import Image from "next/image";
import React, { useRef } from "react";
import Add from "@/assets/add.png";

import html2canvas from "html2canvas";
import { toast } from "react-toastify";
import { Report } from "@/types";
import ScoutCard from "@/components/cards/ScoutCard";
import useCropModalLogic from "@/hooks/useCropModalLogic";

function DoubleScouts() {
  const ref = useRef<HTMLDivElement>(null);
  const cropModalState = useCropModalLogic();
  const { setIsOpen, handleSubmit, clearState } = cropModalState;

  //   --------------------
  const [reports, setReports] = React.useState<Report[]>([]);

  const handleModalSubmit = () => {
    const result = handleSubmit() as Report;
    if (result) {
      setReports([...reports, result]);
      clearState();
    }
  };

  const convertToImage = async () => {
    const element = ref.current;
    if (element === null) {
      throw new Error();
    }

    const canvas = await html2canvas(element, {
      scale: (window.devicePixelRatio = 1),
      backgroundColor: "black",
    });
    const dataUrl = canvas.toDataURL("image/png", {
      useCors: true,
    });
    const blob = await fetch(dataUrl).then((r) => r.blob());

    if (!blob) {
      throw new Error();
    }

    await copyToClipboard(blob);
  };

  const copyToClipboard = async (blob: Blob) => {
    const item = new ClipboardItem({
      "image/png": blob,
    });

    await navigator.clipboard
      .write([item])
      .then(() => {
        toast.success("Report Copied!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((e) => {
        const message = e.message || "Something went wrong!";
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="relative h-full">
      <CropProductionModal
        {...cropModalState}
        handleSubmit={handleModalSubmit}
      />
      <div
        onClick={() => setIsOpen(true)}
        className="group fixed bottom-5 right-3 z-10 cursor-pointer flex-col items-center justify-center rounded-full border border-blue-700 bg-blue-200 p-2 shadow-md shadow-blue-300 transition-all duration-75 hover:scale-105 lg:bottom-10 lg:right-10"
      >
        <Image
          src={Add}
          width={50}
          height={50}
          alt="add"
          className="transition-all duration-150 group-hover:rotate-90"
        />
      </div>
      {reports.length !== 0 ? (
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5">
          {reports.map((report, index) => (
            <ScoutCard
              ref={ref}
              report={report}
              key={index}
              onCopy={convertToImage}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-full flex-1 items-center justify-center">
          <p className="text-center font-legatus text-2xl font-medium">
            No reports yet, add one!
          </p>
        </div>
      )}
    </div>
  );
}

export default DoubleScouts;
