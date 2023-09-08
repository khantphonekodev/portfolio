function Footer() {
  return (
    <footer className="px-8 py-4 text-sm md:px-20 flex justify-between items-center text-slate-500 ">
      <p>&copy; All Rights Reserved {new Date().getFullYear()}</p>
      <p>Khant.Dev</p>
    </footer>
  );
}

export default Footer;
