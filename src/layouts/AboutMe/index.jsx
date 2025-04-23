function AboutMe() {
  return (
    <div className="md:flex px-8 xl:px-[180px] min-h-screen xl:justify-between items-center max-xl:flex-col justify-center">
      <div className="w-full flex justify-center 2xl:w-[800px] 2xl:h-[800px] md:h-[600px] max-md:pt-4">
        <img src="./images/peopleandcomputer.jpeg" alt="" />
      </div>
      <div className="lg:w-1/2 space-y-4  w-full">
        <h1 className="text-4xl lg:text-6xl text-center xl:text-start">
          About Me
        </h1>
        <p className="text-2xl md:text-3xl">
          A Fullstack Web Developer graduated from Harisenin Bootcamp with
          experience building web applications using React.js, Node.js, and
          MySQL. I am used to developing both frontend and backend features, and
          have a good understanding of authentication, REST APIs, and state
          management such as Redux and Zustand.Now, I focus on developing
          applications with React and Express, while continuing to learn new
          technologies such as React Native. I also have experience in event
          management and leadership, which has shaped my ability to work
          collaboratively and solve problems efficiently.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
