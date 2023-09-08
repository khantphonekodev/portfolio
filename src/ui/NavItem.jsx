/* eslint-disable react/prop-types */
function NavItem({ children, id, onCloseModal }) {
  return (
    <a href={`#${id}`} onClick={onCloseModal}>
      <li className="font-light text-sm text-center md:text-md transition-all duration-700 hover:text-accent ">
        {children}
      </li>
    </a>
  );
}

export default NavItem;
