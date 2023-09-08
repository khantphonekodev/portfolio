/* eslint-disable react/prop-types */
function AccentButton({ children }) {
  return (
    <button className="bg-transparent border border-accent text-accent font-semibold py-2 px-12 font-inter uppercase hover:bg-accent hover:text-slate-700">
      {children}
    </button>
  );
}

export default AccentButton;
