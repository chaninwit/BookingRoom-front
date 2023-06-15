import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import RegisterInput from "./RegisterInput";
import ButtonModal from "../../../components/ButtonModal";
import validateRegister from "../validators/validate-register";
import InputErrorMessage from "./InputErrorMessage";

import { registerAync } from "../slice/auth-slice";

const initialInput = {
  Fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(registerAync(input)).unwrap();
      toast.success("สมัครสมาชิกสำเร็จ");
    } catch (err) {
      toast.error(err);
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
          value={input.email}
          onChange={handleChangeInput}
          name="email"
          isIvalid={error.email}
        />
        {error.email && <InputErrorMessage message={error.email} />}
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
          type="Password"
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
