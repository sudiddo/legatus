import { Report } from "@/types";
import moment from "moment";
import { useState } from "react";
import { toast } from "react-toastify";

export default function useCropModalLogic() {
  const [x, setX] = useState(""); // this state is for x coordinate
  const [y, setY] = useState(""); // this state is for y coordinate
  const [firstReport, setFirstReport] = useState(""); // this state is for first scout
  const [secondReport, setSecondReport] = useState(""); // this state is for second scout
  const [isOpen, setIsOpen] = useState(false); // this state is for modal visibility

  // this function is used to reset input states and modal visibility state
  const clearState = () => {
    setX("");
    setY("");
    setFirstReport("");
    setSecondReport("");
  };

  const parseData = (data: string) => {
    // Report Time
    const reportTime = data?.split("scouts")[1].split("\n")[1].trim();
    const formattedTime = moment(reportTime, "YY/MM/DD HH:mm:ss").format(
      "dddd, DD MMMM YY - HH:mm:ss"
    );

    // Attacker
    const attackerKeyword =
      data?.indexOf("ATTACKER") === -1 ? "Attacker" : "ATTACKER";
    const attacker = data?.split(attackerKeyword, 2)[1];
    const attackerName = attacker?.split("\n")[1].split("from")[0].trim();

    // Defender
    const targetKeyword =
      data?.indexOf("DEFENDER") === -1 ? "Defender" : "DEFENDER";
    const target = data?.split(targetKeyword);
    const targetPlayer = target[1].trim().split("\n")[0].split("from");
    const targetName = targetPlayer[0];
    const coordinate = x && y ? `- (${x}|${y})` : "";
    const targetVillage = `${targetPlayer[1]} ${coordinate}`;

    // Resources
    const getResources = attacker
      ?.split("Resources")[1]
      .split("\t")[1]
      .trim()
      .split("\n");
    const resources = {
      wood: getResources[0],
      clay: getResources[1],
      iron: getResources[2],
      crop: getResources[3],
    };
    return {
      targetName,
      targetVillage,
      attackerName,
      reportTime: formattedTime,
      resources,
    };
  };

  const handleSubmit = (): Report | void => {
    if (firstReport && secondReport) {
      const firstCrop = parseData(firstReport).resources.crop;
      const secondCrop = parseData(secondReport).resources.crop;
      const production = (Number(secondCrop) - Number(firstCrop)) * 360;
      const report: Report = {
        player: parseData(firstReport).targetName,
        village: parseData(firstReport).targetVillage,
        x,
        y,
        firstCrop,
        secondCrop,
        production,
        time: parseData(firstReport).reportTime,
        reporter: parseData(firstReport).attackerName,
      };
      setIsOpen(false);
      clearState();
      return report;
    } else {
      toast.error("Please fill first and second scout!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return {
    x,
    setX,
    y,
    setY,
    firstReport,
    setFirstReport,
    secondReport,
    setSecondReport,
    isOpen,
    setIsOpen,
    handleSubmit,
    clearState,
  };
}
