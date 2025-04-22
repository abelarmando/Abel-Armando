function AboutMe() {
  return (
    <div className="md:flex px-8 xl:px-[180px] h-screen xl:justify-between items-center max-xl:flex-col justify-center">
      <div className="w-full flex justify-center 2xl:w-[800px] 2xl:h-[800px] md:h-[600px] max-md:pt-4">
        <img src="./images/peopleandcomputer.jpeg" alt="" />
      </div>
      <div className="lg:w-1/2 space-y-4  w-full">
        <h1 className="text-4xl lg:text-6xl text-center xl:text-start">
          About Me
        </h1>
        <p className="text-2xl md:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quae magni quasi corporis, officiis similique cum cupiditate dolor
          nemo sint, vitae consequuntur unde impedit! Quod doloribus possimus
          laborum sapiente aliquam.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
