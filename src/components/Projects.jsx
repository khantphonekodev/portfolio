import Section from "../ui/Section";

function Pill({ children }) {
  return (
    <div className="bg-slate-300 text-black font-semibold py-1 px-3 rounded-full text-xs">
      {children}
    </div>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <div className="max-h-screen flex flex-col justify-center lg:w-[80%] xl:w-[60%] lg:mx-auto">
        <p className="text-accent text-md md:text-lg font-bree">
          Projects I've built
        </p>
        <div
          className="flex flex-col gap-10 mt-10 
"
        >
          {/* Project 1 */}
          <a
            href="https://we-write-blogs.vercel.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="grid grid-cols-3 w-full gap-12 items-center bg-modal p-8 hover:bg-gray-500 rounded-lg hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50  hover:border-gray-100">
              <div className="w-full h-auto col-start-1 col-end-3 md:col-end-2 ">
                <img
                  src="src/imgs/wewriteblogs.png"
                  className="shadow-sm rounded-sm"
                  alt=""
                />
              </div>
              <div className="col-start-1 md:col-start-2 col-end-4 flex flex-col justify-between gap-2 font-inter">
                <p className="text-accent font-bree">We-Write-Blogs</p>
                <p className="text-md md:text-lg">
                  {" "}
                  we-write-blogs is a simple blog website built with
                  React.js,React-Query,Supabase and some other libraries
                  (react-hook-from,react-hot-toast,react-icons,styled-components,react-routers).All
                  crud operations for blog resource and authenticaion are
                  included.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Pill>React.js</Pill>
                  <Pill>Supabase</Pill>
                  <Pill>React-Query</Pill>
                  <Pill>React-Routers</Pill>
                </div>
              </div>
            </div>
          </a>
          {/* {Project 2} */}
          <a
            href="https://we-write-blogs.vercel.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="grid grid-cols-3 w-full gap-12 items-center bg-modal p-8 hover:bg-gray-500 rounded-lg hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50  hover:border-gray-100">
              <div className="w-full h-auto col-start-1 col-end-3 md:col-end-2 border border-gray-700">
                <img
                  src="src/imgs/portfolio.png"
                  className="shadow-sm rounded-sm"
                  alt=""
                />
              </div>
              <div className="col-start-1 md:col-start-2 col-end-4 flex flex-col justify-between gap-2 font-inter">
                <p className="text-accent font-bree">Khant Dev</p>
                <p className="text-md md:text-lg">
                  This is my portfolio website, built using React.js and
                  Tailwind CSS. While I had previously created my portfolio with
                  HTML, CSS, and JavaScript last year, I decided to rebuild it
                  using React.js. I'm excited to practice my react skill in this
                  new version.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Pill>React.js</Pill>
                  <Pill>Tailwindcss</Pill>
                  <Pill>Git</Pill>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
