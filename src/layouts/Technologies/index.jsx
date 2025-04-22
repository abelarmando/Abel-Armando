import BordIcon from "../../components/bordicon";
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
        <BordIcon icon={<FaHtml5 className="text-7xl text-orange-400" />} />
        <BordIcon icon={<FaCss3 className="text-7xl text-blue-500" />} />
        <BordIcon
          icon={<RiTailwindCssFill className="text-7xl text-blue-400" />}
        />
        <BordIcon
          icon={<IoLogoJavascript className="text-7xl text-yellow-400" />}
        />
        <BordIcon icon={<FaReact className="text-7xl text-cyan-500" />} />
        <BordIcon icon={<FaNodeJs className="text-7xl text-green-400" />} />
        <BordIcon icon={<SiExpress className="text-7xl" />} />
        <BordIcon icon={<SiMysql className="text-7xl text-blue-300" />} />
      </div>
    </div>
  );
}

export default Technologies;
