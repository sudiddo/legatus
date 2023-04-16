import { Report } from "@/types";
import Image from "next/image";
import numeral from "numeral";
import React, { forwardRef } from "react";
import Wheat from "@/assets/wheat.png";
import MagnifyingGlass from "@/assets/magnifying-glass.png";

interface ScoutCardProps {
  report: Report;
  onCopy: () => void;
}

const ScoutCard = forwardRef<HTMLDivElement, ScoutCardProps>(
  ({ report, onCopy }, ref) => {
    return (
      <div
        ref={ref}
        className="flex h-44 flex-col rounded-2xl border-2 border-blue-700 bg-white p-2"
      >
        <div className="flex flex-row items-center justify-between font-legatus">
          <p className="text-lg font-semibold lg:ml-3">
            {`${report.player} (${report.x} | ${report.y})`}
          </p>
          <p>
            {`${report.oasisBonus}% `}{`${report.cropFields}c `}{report.isCap? `Cap` : `Non-Cap`}
          </p>
        </div>
        <hr className="mb-2 border-black" />
        <div className="mb-4 flex">
          <div className="flex flex-1 flex-col">
            <p className="mb-1 text-sm font-bold">First Scout Result</p>
            <div className="flex flex-1 flex-row items-center">
              <div className="relative h-5 w-5">
                <Image
                  src={MagnifyingGlass}
                  alt="id-card"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
                <sub className="absolute -bottom-2 right-0 font-legatus text-xs">
                  1
                </sub>
              </div>
              <p className="ml-3 font-legatus">
                {numeral(report.crops1).format("0,0")}{" "}
                <span className="font-sans text-sm">crops</span>
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <p className="mb-1 text-sm font-bold">Second Scout Result</p>

            <div className="flex flex-1 flex-row items-center">
              <div className="relative h-5 w-5">
                <Image
                  src={MagnifyingGlass}
                  alt="id-card"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
                <sub className="absolute -bottom-2 right-0 font-legatus text-xs">
                  2
                </sub>
              </div>
              <p className="ml-3 font-legatus">
                {numeral(report.crops2).format("0,0")}{" "}
                <span className="font-sans text-sm">crops</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-1 flex-col">
            <p className="mb-1 text-sm font-bold">Crop Production/hour</p>
            <div className="flex flex-row items-start">
              <div className="relative h-5 w-5">
                <Image
                  src={Wheat}
                  alt="id-card"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              <p className="ml-3 font-legatus font-bold">
                {numeral(report.production).format("0,0")}{" "}
                <span className="font-sans text-sm font-medium">
                  crops/hour
                </span>
              </p>
            </div>
          </div>

          <div
            data-html2canvas-ignore="true"
            className={`flex flex-1 justify-center`}
          >
            <button
              onClick={onCopy}
              className="text-bold rounded-lg bg-blue-500 p-2 text-center font-sans text-xs font-semibold text-white transition-transform duration-75 hover:scale-105 active:scale-95 lg:p-2 lg:text-sm"
            >
              Copy to clipboard
            </button>
          </div>
        </div>
      </div>
    );
  }
);

ScoutCard.displayName = "ScoutCard";
export default ScoutCard;
