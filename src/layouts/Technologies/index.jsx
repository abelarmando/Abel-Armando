import Bord_Icon from "../../components/Bord_Icon";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";

function Technologies() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="lg:text-6xl text-4xl">Technologies</h1>
      <div className="flex gap-10 flex-wrap justify-center">
        <Bord_Icon icon={<FaHtml5 className="text-7xl text-orange-400" />} />
        <Bord_Icon icon={<FaCss3 className="text-7xl text-blue-500" />} />
        <Bord_Icon
          icon={<RiTailwindCssFill className="text-7xl text-blue-400" />}
        />
        <Bord_Icon
          icon={<IoLogoJavascript className="text-7xl text-yellow-400" />}
        />
        <Bord_Icon icon={<FaReact className="text-7xl text-cyan-500" />} />
        <Bord_Icon icon={<FaNodeJs className="text-7xl text-green-400" />} />
        <Bord_Icon icon={<SiExpress className="text-7xl" />} />
        <Bord_Icon icon={<SiMysql className="text-7xl text-blue-300" />} />
      </div>
    </div>
  );
}

export default Technologies;
