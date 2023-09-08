import {
  AiOutlineLinkedin,
  AiFillFacebook,
  AiFillGoogleCircle,
} from "react-icons/ai";

function Thank() {
  return (
    <div
      className="p-8 gap-2 row-auto justify-center md:p-20 lg:w-[60%] lg:mx-auto mt-20 md:mt-0"
      id="contact"
    >
      <p className="text-accent text-md md:text-lg font-bree">
        Contact Info & Thank You For Your Attention
      </p>
      <div className="flex flex-col gap-4 mt-5 font-inter">
        <p className="text-sm tracking-wide font-light md:text-lg">
          Thank you for visiting my portfolio. I look forward to the opportunity
          to work with you and contribute my skills to your team. Together, we
          can create beautiful, user-friendly websites.
        </p>
        <div className="flex flex-cols gap-4">
          <a href="https://www.facebook.com/profile.php?id=100091969899245">
            <AiFillFacebook className="text-3xl" />
          </a>
          <a href="mailto:khantphoneko.dev@gmail.com">
            <AiFillGoogleCircle className="text-3xl" />
          </a>

          <AiOutlineLinkedin className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Thank;
