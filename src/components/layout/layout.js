import Navbar from "./Navbar";
import Table from "./table";
import TempUserContextProvider from "../controllers/utils";
const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <Table />
    </div>
  );
};

export default Layout;
