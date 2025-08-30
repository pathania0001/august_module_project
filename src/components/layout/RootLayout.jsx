import Main from "../ui/Main";
import Sidebar from "../ui/Sidebar";

const RouterLayout = ()=>{
  return (
    <div className="flex bg-[#111315]">
    <Sidebar />
    <Main/>
    </div>
  )   
}

export default RouterLayout;