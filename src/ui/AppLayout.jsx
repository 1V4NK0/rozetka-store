import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className=" h-screen flex flex-col">
      <Header className="fixed top-0 left-0 right-0 bg-white z-50 flex-1" />
      <main className="pt-16"> 
        <Outlet />
      </main>
      <Footer className="" />
    </div>
  );
}

export default AppLayout;
