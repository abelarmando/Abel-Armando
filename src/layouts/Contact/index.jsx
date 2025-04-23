import Formemail from "../../components/Formemail";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="xl:flex px-8 xl:px-[180px] justify-between items-center ">
      <div className="w-full space-y-4 xl:w-1/4">
        <h1 className="lg:text-6xl text-4xl">Let's Connect</h1>
        <p className="text-2xl">
          I'm always open to new opportunities and meaningful conversations.
          Feel free to reach out and connect!
        </p>
        <div className="flex gap-4">
          <FaLinkedin
            className="text-6xl"
            onClick={() =>
              window.open("https://www.linkedin.com/in/abel-armando/", "_blank")
            }
          />
          <FaGithub
            className="text-6xl"
            onClick={() =>
              window.open("https://github.com/abelarmando", "_blank")
            }
          />
        </div>
      </div>
      <div className="xl:w-1/2 h-[600px] w-full">
        <Formemail />
      </div>
    </div>
  );
}

export default Contact;
