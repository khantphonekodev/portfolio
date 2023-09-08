import AccentButton from "./AccentButton";

function IntroContent() {
  return (
    <div className="w-full lg:w-[50%] flex flex-col gap-6 lg:items-start lg:justify-center p-4">
      <h3 className="text-2xl font-semibold text-accent">01. Intro</h3>
      <h1 className="text-lg font-[100] font-bree">
        Hi, I'm Khant Phone Ko, a 20-year-old junior web developer with a
        passion creating elegant and minimalist websites. I specialize in HTML,
        CSS, JavaScript, and React.js, and I have experience with modern web
        development tools like Tailwind CSS, Git, and GitHub. Beyond the
        front-end, I also possess a basic understanding of RESTful APIs and
        backend development.
      </h1>
      <div>
        <AccentButton>Check github</AccentButton>
      </div>
    </div>
  );
}

export default IntroContent;
