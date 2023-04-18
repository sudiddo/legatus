import React from "react";

interface ModalSectionTitleProps {
  title: string;
}

const ModalSectionTitle: React.FC<ModalSectionTitleProps> = (props) => {
  return (
    <div>
      <p className="text-xs font-bold">{props.title}</p>
      <hr />
    </div>
  );
};

export default ModalSectionTitle;
