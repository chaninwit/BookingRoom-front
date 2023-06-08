import { useState } from "react";
import RegisterInput from "./RegisterInput";
import ButtonModal from "../../../components/ButtonModal";
import validateRegister from "../validators/validate-register";
import InputErrorMessage from "./InputErrorMessage";

const initialInput = {
  Fullname: "",
  Email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const result = validateRegister(input);
    if (result) {
      return setError(result);
    }
  };

  return (
    <ButtonModal title="สมัครสมาชิก">
      <form
        className="space-y-4 md:space-y-6"
        action="#"
        onSubmit={handleSubmitForm}
      >
        <RegisterInput
          placeholder="ชื่อเต็ม"
          titlename="Fullname"
          type="taxt"
          value={input.Fullname}
          onChange={handleChangeInput}
          name="Fullname"
          isIvalid={error.Fullname}
        />
        {error.Fullname && <InputErrorMessage message={error.Fullname} />}

        <RegisterInput
          placeholder="อีเมลของคุณ"
          titlename="Email"
          type="email"
          value={input.Email}
          onChange={handleChangeInput}
          name="Email"
          isIvalid={error.Email}
        />
        {error.Email && <InputErrorMessage message={error.Email} />}
        <RegisterInput
          placeholder="••••••••"
          titlename="Password"
          type="password"
          value={input.password}
          onChange={handleChangeInput}
          name="password"
          isIvalid={error.password}
        />
        {error.password && <InputErrorMessage message={error.password} />}
        <RegisterInput
          placeholder="••••••••"
          titlename="confirmPassword"
          type="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          name="confirmPassword"
          isIvalid={error.confirmPassword}
        />
        {error.confirmPassword && (
          <InputErrorMessage message={error.confirmPassword} />
        )}
        <button
          type="submit"
          className="w-full text-white bg-blue-500 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          ยืนยัน
        </button>
      </form>
    </ButtonModal>
  );
}
