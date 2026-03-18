import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; 



const MainLayout = () => {
  const navigation = useNavigation(); 
  const isLoading = navigation.state === "loading"; 



  return (
    <>
      <Navbar />

      {isLoading && <Loader />}

      <div className="min-h-[80vh]">
        <Outlet />
      </div>

      <Footer /> 
    </>
  );
};

export default MainLayout;