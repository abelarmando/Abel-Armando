import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
function CardProject({ img, title, github, live, technologies }) {
  return (
    <div className="w-[400px] rounded-lg bg-[#353333a2] space-y-3 overflow-hidden h-fit relative group cursor-pointer">
      <div className="absolute top-0 right-0 w-full h-full bg-black-50 opacity-0 flex justify-center items-center group-hover:opacity-70">
        <div className="flex items-center gap-4">
          <FaCode
            className=" text-6xl text-[#adb7be] border-white border-2 rounded-full p-2"
            onClick={() => window.open(github, "_blank")}
          />
          {live && (
            <FaEye
              className=" text-6xl text-[#adb7be] border-white border-2 rounded-full p-2"
              onClick={() => window.open(live, "_blank")}
            />
          )}
        </div>
      </div>
      <div>
        <img src={img} alt="a" className=" h-[300px] w-full" />
      </div>
      <div className="pb-2 pl-2 space-y-2">
        <h2 className="text-xl">{title}</h2>
        <div className="flex gap-2">
          {technologies.map((tech) => (
            <div className=" bg-[#353333] rounded-lg p-2">
              <p>{tech}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <FaCode
            className=" text-5xl text-[#adb7be] border-white border-2 rounded-full p-2 block md:hidden"
            onClick={() => window.open(github, "_blank")}
          />
          {live && (
            <FaEye
              className=" text-5xl text-[#adb7be] border-white border-2 rounded-full p-2 block md:hidden"
              onClick={() => window.open(live, "_blank")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
