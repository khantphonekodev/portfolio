function Section({ children, id }) {
  return (
    <section className="p-8 md:p-20" id={id}>
      {children}
    </section>
  );
}

export default Section;
