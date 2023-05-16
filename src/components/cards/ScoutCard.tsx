import { Report } from "@/types";
import Image from "next/image";
import numeral from "numeral";
import React, { forwardRef } from "react";
import Wheat from "@/assets/wheat.png";
import MagnifyingGlass from "@/assets/magnifying-glass.png";
import moment from "moment";

interface ScoutCardProps {
  report: Report;
  onCopy: () => void;
}

const ScoutCard = forwardRef<HTMLDivElement, ScoutCardProps>(
  ({ report, onCopy }, ref) => {
    const isFirefox = () => {
      return navigator.userAgent.toLowerCase().includes("firefox");
    };
    return (
      <div
        ref={ref}
        className="flex flex-col rounded-2xl border-2 border-blue-700 bg-white p-2 lg:px-5"
      >
        <div className="flex flex-row items-center justify-between font-legatus text-xs">
          <div className="flex flex-col text-left">
            <p className="text-lg font-semibold">{report.player}</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-sm font-semibold">{report.village}</p>
            <p className="">{report.time}</p>
          </div>
        </div>
        <hr className="mb-2 mt-1 border-black" />
        <div className="mb-4 flex">
          <div className="flex flex-1 flex-col">
            <p className="mb-1 text-sm font-bold">First Scout</p>
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
                {numeral(report.firstCrop).format("0,0")}{" "}
                <span className="font-sans text-sm">crops</span>
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-end">
            <p className="mb-1 text-sm font-bold">Second Scout</p>

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
                {numeral(report.secondCrop).format("0,0")}{" "}
                <span className="font-sans text-sm">crops</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-1 flex-col">
            <p className="mb-1 text-sm font-bold">Production</p>
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
            className={`flex flex-1 justify-end`}
          >
            {!isFirefox() && (
              <button
                onClick={onCopy}
                className="text-bold rounded-lg bg-blue-500 p-2 text-center font-sans text-xs font-semibold text-white transition-transform duration-75 hover:scale-105 active:scale-95 lg:p-2 lg:text-sm"
              >
                Copy to clipboard
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

ScoutCard.displayName = "ScoutCard";
export default ScoutCard;
