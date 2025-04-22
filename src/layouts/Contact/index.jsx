import Formemail from "../../components/Formemail";

function Contact() {
  return (
    <div className="flex px-8 xl:px-[180px] justify-between items-center ">
      <div className="w-1/4 space-y-4">
        <h1 className="lg:text-6xl text-4xl">Let's Connect</h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          explicabo modi aliquid eum voluptates pariatur nulla aperiam,
          necessitatibus fugit vero rerum repudiandae veritatis maiores ipsum
          dolores ullam at libero? Sint.
        </p>
      </div>
      <div className="w-1/2 h-[600px]">
        <Formemail />
      </div>
    </div>
  );
}

export default Contact;
