import "./App.css";
import { GrLinkNext } from "react-icons/gr";


function App({ goToSecondSection }) {
  return (
    <div className="w-screen h-[100vh] bg-home  relative flex justify-center items-end">
      <div className=" flex flex-col justify-center items-center gap-4 bg- w-fit mx-auto  text-[#f8f5eecc] font-medium mb-8 p-2 rounded-lg">
        <button className="py-4 px-8 rounded-4xl bg-[#0a0a0a80]/60 shadow-sm hover:bg-[#0a0a0a80]/80  flex gap-4 text-lg cursor-pointer justify-center items-center " onClick={goToSecondSection}>Enter menu <span><GrLinkNext />
</span></button>
        <span className="font-bold text-xl ">Made By Mo Osama</span>
      </div>
    </div>
  );
}

export default App;
