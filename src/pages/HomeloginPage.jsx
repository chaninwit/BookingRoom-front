import Card from "../components/Card";
import Header from "../layouts/Header";
import Menu from "../layouts/Menu";

export default function HomeloginPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex">
        <div>
          <Menu />
        </div>
        <div className="flex">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
