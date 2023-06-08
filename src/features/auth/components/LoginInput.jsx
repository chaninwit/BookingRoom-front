export default function LoginInput({
  placeholder,
  titlename,
  name,
  type,
  id,
  onChange,
  value,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {titlename}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
        placeholder={placeholder}
        required=""
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
