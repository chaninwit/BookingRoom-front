import createClasses from "../../../utils/create-classes";

export default function RegisterInput({
  placeholder,
  titlename,
  name,
  type,
  id,
  onChange,
  value,
  isIvalid,
}) {
  const defaultClassName =
    "bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 ";
  const className = createClasses(
    defaultClassName,
    isIvalid
      ? "border-red-500 focus:ring-red-300"
      : "border-gray-300 focus:ring-blue-300 focus:border-blue-500"
  );
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {titlename}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        required=""
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
