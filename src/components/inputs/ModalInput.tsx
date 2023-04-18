import React from "react";

interface Props {
  label?: string;
  type: "text" | "number";
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder: string;
  required?: boolean;
}

function ModalInput({
  label,
  type,
  value,
  onChange,
  name,
  placeholder,
  required,
}: Props) {
  return (
    <>
      {label && (
        <p>
          {label}
          {required && <span className="ml-1 text-red-400">*</span>}
        </p>
      )}
      <input
        type={type}
        name={name}
        id={name || placeholder}
        className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default ModalInput;
