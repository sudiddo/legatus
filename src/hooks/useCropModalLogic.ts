import { Report } from "@/types";
import { useState } from "react";
import { toast } from "react-toastify";

export default function useCropModalLogic() {
  const [player, setPlayer] = useState(""); // this state is for player name
  const [x, setX] = useState(""); // this state is for x coordinate
  const [y, setY] = useState(""); // this state is for y coordinate
  const [crops1, setCrops1] = useState(""); // this state is for first scout
  const [crops2, setCrops2] = useState(""); // this state is for second scout
  const [isOpen, setIsOpen] = useState(false); // this state is for modal visibility

  // this function is used to reset input states and modal visibility state
  const clearState = () => {
    setPlayer("");
    setX("");
    setY("");
    setCrops1("");
    setCrops2("");
  };

  const handleSubmit = (): Report | void => {
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
    isOpen,
    setIsOpen,
    handleSubmit,
    clearState,
  };
}
