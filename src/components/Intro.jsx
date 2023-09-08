import AccentButton from "../ui/AccentButton";
import Section from "../ui/Section";

function Intro() {
  return (
    <Section id="aboutme">
      <div className="flex h-full justify-center items-center font-inter">
        <div className="flex flex-col items-right gap-4 md:gap-6  lg:w-[80%] xl:w-[60%]">
          <p className="text-accent text-md md:text-lg font-bree">
            Hi, My name is
          </p>
          <div>
            <h1 className="text-4xl font-semibold tracking-wide ">
              Khant Phone Ko
            </h1>
            <h1 className="text-4xl font-semibold tracking-wide  text-slate-400 hidden md:inline-block">
              Junior Web Developer
            </h1>
          </div>
          {/* <p className="text-sm tracking-wide font-light md:text-lg hidden lg:inline-block">
            Are you looking for a junior web developer with a passion for
            simplicity and a hunger for learning? Look no further!
          </p> */}
          <p className="text-sm tracking-wide font-light md:text-lg">
            <span className="text-accent text-md md:text-lg font-bree">
              About Me -
            </span>{" "}
            {""}
            Hi, I'm Khant Phone Ko, a 20-year-old junior web developer with a
            passion for crafting elegant and minimalist websites. I specialize
            in HTML, CSS, JavaScript, and React.js, and I have experience with
            modern web development tools like Tailwind CSS, Git, and GitHub.
            Beyond the front-end, I also possess a basic understanding of
            RESTful APIs and backend development.
          </p>
          <p className="text-sm tracking-wide font-light md:text-lg">
            <span className="text-accent text-md md:text-lg font-bree">
              Why Choose Me? -
            </span>
            {"  "}
            Though my professional journey is just beginning, I'm driven to make
            an impact. What I lack in experience, I make up for in determination
            and a thirst for learning. I believe in the power of collaboration
            and am seeking a position as a junior web developer where I can work
            alongside senior developers who can mentor and guide me as I
            continue to evolve and refine my skills.
          </p>
          <p className="text-sm tracking-wide font-light md:text-lg">
            <span className="text-accent text-md md:text-lg font-bree">
              My Approach -
            </span>
            {"  "}
            I'm a firm believer in the beauty of simplicity. I love creating
            clean and minimalist websites that not only look great but also
            deliver a seamless user experience. Every project I undertake is a
            chance to blend aesthetics with functionality, creating websites
            that stand out in the digital landscape.
          </p>
          <a
            href="https://github.com/khantphonekodev"
            target="_blank"
            rel="noreferrer"
          >
            <AccentButton>Check out GitHub</AccentButton>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Intro;
