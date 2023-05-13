import React from "react";

interface Props {
  label?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  placeholder: string;
  required?: boolean;
}

function ModalTextArea({
  label,
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
      <textarea
        name={name}
        id={name || placeholder}
        className="block h-28 w-full rounded-md border-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 lg:h-32"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default ModalTextArea;
