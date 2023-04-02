import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-[#EEF3F7] h-[900px]">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
