import LoginInput from "./LoginInput";
import ButtonModal from "../../../components/ButtonModal";

export default function RegisterForm() {
  return (
    <ButtonModal title="สมัครสมาชิก">
      <form className="space-y-4 md:space-y-6" action="#">
        <LoginInput
          placeholder="ชื่อเต็ม"
          titlename="Fullname"
          type="taxt"
          id="Fullname"
        />
        <LoginInput
          placeholder="อีเมลของคุณ"
          titlename="Email"
          type="email"
          id="email"
        />
        <LoginInput
          placeholder="••••••••"
          titlename="Password"
          type="password"
          id="password"
        />
        <LoginInput
          placeholder="••••••••"
          titlename="confirmPassword"
          type="confirmPassword"
          id="confirmPassword"
        />

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
