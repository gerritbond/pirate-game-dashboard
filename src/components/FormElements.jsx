import { Link } from "react-router-dom";

export const FormInput = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col p-2">
      <label htmlFor={label} className="block">
        <p className="text-yellow-500 font-bold text-lg">{label}</p>
        <input
          className="w-full border-2 border-yellow-500 bg-gray-800 text-yellow-500"
          id={label}
          name={label}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export const FormTextArea = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col p-2">
      <label htmlFor={label} className="block">
        <p className="text-yellow-500 font-bold text-lg">{label}</p>
        <textarea
          className="w-full border-2 border-yellow-500 bg-gray-800 text-yellow-500"
          id={label}
          name={label}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export const FormSelect = ({ label, value, onChange, options }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select id={label} name={label} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export const SubmitButton = ({ label, onClick }) => {
  return (
    <div className="">
      <button
        className="border-2 border-yellow-500 bg-gray-800 text-yellow-500 font-bold px-4 py-2"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export const LinkButton = ({ label, to }) => {
  return (
    <div className="">
      <Link
        className="border-2 border-yellow-500 bg-gray-800 text-yellow-500 font-bold px-4 py-2"
        to={to}
      >
        {label}
      </Link>
    </div>
  );
};
