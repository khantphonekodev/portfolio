import { IoMenu } from "react-icons/io5";
import Modal from "../ui/Modal";
import MobileNav from "./MobileNav";
import NavItem from "../ui/NavItem";
import { useEffect, useState } from "react";

const nav = [
  { id: "aboutme", value: "About Me" },
  { id: "projects", value: "Projects" },
  { id: "contact", value: "Contact" },
];

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  return (
    <header
      className={`w-full fixed px-8 md:px-16 py-5 font-inter flex justify-between items-center ${
        isHidden ? "hidden" : "flex bg-main z-100"
      }`}
    >
      <h1 className="text-xl font-normal">Khant.Dev</h1>

      <ul className="text-xs hidden md:flex md:gap-4 uppercase font-inter font-semibold ">
        {nav.map((el) => (
          <NavItem key={el.id} id={el.id}>
            {el.value}
          </NavItem>
        ))}
      </ul>

      <Modal>
        <Modal.OpenButton value="hamburger">
          <IoMenu className="text-3xl inline-block md:hidden" />
        </Modal.OpenButton>
        <Modal.Content value="hamburger">
          <MobileNav />
        </Modal.Content>
      </Modal>
    </header>
  );
}

export default Header;
