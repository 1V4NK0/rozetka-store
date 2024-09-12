// import { useNavigation } from "react-router";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
function AppLayout() {
  // const navigation = useNavigation();
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
