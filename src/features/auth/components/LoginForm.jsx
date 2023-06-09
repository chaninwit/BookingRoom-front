import LoginInput from "./LoginInput";
import Modal from "../../../components/Modal";
import validateLogin from "../validators/validate-login";
import InputErrorMessage from "./InputErrorMessage";
import useForm from "../../../hooks/useForm";

export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      email: "",
      password: "",
    },
    validateLogin
  );
  return (
    <Modal title="เข้าสู่ระบบ">
      <form
        className="space-y-4 md:space-y-6"
        action="#"
        onSubmit={handleSubmitForm((login) => {})}
      >
        <LoginInput
          placeholder="อีเมลของคุณ"
          titlename="Email"
          type="email"
          value={input.email}
          onChange={handleChangeInput}
          name="email"
          isIvalid={error.email}
        />
        <InputErrorMessage message={error.email} />
        <LoginInput
          placeholder="••••••••"
          titlename="Password"
          type="password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          isInvalid={error.password}
        />
        <InputErrorMessage message={error.password} />
        <button
          type="submit"
          className="w-full text-white bg-blue-500 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          ยืนยัน
        </button>
      </form>
    </Modal>
  );
}
