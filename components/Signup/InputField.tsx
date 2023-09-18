import React from "react";

const InputField = ({
  className,
  label,
  haveerror,
  placeholder,
  type,
  id,
  name,
  value,
  onChange,
  required,
}: {
  className: string;
  label: string;
  placeholder: string;
  haveerror: boolean;
  type: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}) => {
  
  return (
    <div className={className+"  duration-100 "+ (haveerror &&" text-red-500") }>
      <label
        className="block  text-sm font-bold mb-2"
        htmlFor="email"
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400 ${haveerror&&"border-red-600"}`}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
