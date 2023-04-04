import CropProductionModal from "@/components/modals/CropProductionModal";
import Image from "next/image";
import React, { useRef } from "react";
import Add from "@/assets/add.png";

import html2canvas from "html2canvas";
import { toast } from "react-toastify";
import { Report } from "@/types";
import ScoutCard from "@/components/cards/ScoutCard";

function DoubleScouts() {
  const ref = useRef<HTMLDivElement>(null);

  const [player, setPlayer] = React.useState("");
  const [x, setX] = React.useState("");
  const [y, setY] = React.useState("");
  const [crops1, setCrops1] = React.useState("");
  const [crops2, setCrops2] = React.useState("");
  const [isCalculatorOpen, setIsCalculatorOpen] = React.useState(false);
  //   --------------------
  const [reports, setReports] = React.useState<Report[]>([]);

  const handleSubmit = () => {
    // Check if crops1 and crops2 are filled
    if (crops1 && crops2) {
      const production = (Number(crops2) - Number(crops1)) * 360;
      const report: Report = {
        player,
        x,
        y,
        crops1: Number(crops1),
        crops2: Number(crops2),
        production,
      };
      setReports([...reports, report]);
      clearState();
      setIsCalculatorOpen(false);
    } else {
      toast.error("Please fill first and second scout!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const clearState = () => {
    setPlayer("");
    setX("");
    setY("");
    setCrops1("");
    setCrops2("");
  };

  const convertToImage = async () => {
    const item = new ClipboardItem({
      "image/png": (async () => {
        /**
         * To be able to use `ClipboardItem` in safari, need to pass promise directly into it.
         * @see https://stackoverflow.com/questions/66312944/javascript-clipboard-api-write-does-not-work-in-safari
         */

        if (ref.current === null) {
          throw new Error();
        }

        const element = ref.current;
        const canvas = await html2canvas(element, {
          scale: (window.devicePixelRatio = 1),
        });
        const dataUrl = canvas.toDataURL("image/png", {
          useCors: true,
        });
        const blob = await fetch(dataUrl).then((r) => r.blob());

        if (!blob) {
          throw new Error();
        }

        return blob;
      })(),
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
        player={player}
        setPlayer={setPlayer}
        x={x}
        setX={setX}
        y={y}
        setY={setY}
        crops1={crops1}
        setCrops1={setCrops1}
        crops2={crops2}
        setCrops2={setCrops2}
        handleSubmit={handleSubmit}
        isOpen={isCalculatorOpen}
        setIsOpen={setIsCalculatorOpen}
      />
      <div
        onClick={() => setIsCalculatorOpen(true)}
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
