import Content from "./Content";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Layout;
