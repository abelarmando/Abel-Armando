function AboutMe() {
  return (
    <div className="xl:flex px-8 xl:px-[180px] h-screen justify-between">
      <div className="w-full flex justify-center md:w-[800px] md:h-[800px]">
        <img src="./images/peopleandcomputer.jpeg" alt="" />
      </div>
      <div className="w-1/2 space-y-4">
        <h1 className="text-4xl lg:text-6xl">About Me</h1>
        <p className="text-3xl">
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
