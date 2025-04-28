import { TypeAnimation } from "react-type-animation";
import Button from "../../components/Button";
function Hero() {
  return (
    <section className="relative  px-8 xl:px-[180px] min-h-dvh md:flex items-center max-md:pt-27">
      <div className="absolute top-0 right-0 ">
        <img src="./images/bg.png" alt="" />
      </div>
      <div className="flex xl:justify-between xl:items-center justify-center max-xl:flex-col max-xl:gap-10 ">
        <div className="w-full xl:w-3/4 space-y-5">
          <h1 className="lg:text-8xl font-semibold text-4xl 2xl:h-fit sm:h-fit h-[80px]">
            <span>I'm </span>
            <TypeAnimation
              sequence={[
                "Abel Armando",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="lg:text-4xl text-xl">
            I am a web developer who enjoys creating impactful digital
            solutions. In this portfolio, you can see the results of my hard
            work from interactive frontend to solid backend. Let's explore my
            work!
          </p>
          <div className="md:flex gap-10 space-y-4 ">
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-full h-12"
              img="./images/arrow-down.svg"
              link="#projects"
            />
            <Button
              text="Download CV"
              className="md:w-80 md:h-16 w-full h-12"
              img="./images/paperplane.svg"
              link="https://drive.usercontent.google.com/u/0/uc?id=12UUHLqbFr-ZsAzPPd89JmeMNVBoQO0n8&export=download"
            />
          </div>
        </div>

        <div className="z-10 w-full xl:w-1/4 flex justify-end">
          <img src="./images/profile.png" alt="" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
