import LoginInput from "./LoginInput";
import Modal from "../../../components/Modal";

export default function LoginForm() {
  return (
    <Modal title="เข้าสู่ระบบ">
      <form className="space-y-4 md:space-y-6" action="#">
        <LoginInput
          placeholder="อีเมลของคุณ"
          titlename="Email"
          type="email"
          id="Fullname"
        />
        <LoginInput
          placeholder="••••••••"
          titlename="Password"
          type="password"
          id="password"
        />

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
