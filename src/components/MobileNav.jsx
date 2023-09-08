import NavItem from "../ui/NavItem";
import { IoClose } from "react-icons/io5";

/* eslint-disable react/prop-types */
const nav = [
  { id: "aboutme", value: "About Me" },
  { id: "projects", value: "Projects" },
  { id: "contact", value: "Contact" },
];
function MobileNav({ onCloseModal }) {
  return (
    <ul className="w-full rounded-lg flex flex-col  gap-2 font-inter text-xl">
      {nav.map((el) => (
        <NavItem key={el.id} id={el.id} onCloseModal={onCloseModal}>
          {el.value}
        </NavItem>
      ))}
      <IoClose
        className="absolute top-2 right-4 text-2xl"
        onClick={onCloseModal}
      />
    </ul>
  );
}

export default MobileNav;
