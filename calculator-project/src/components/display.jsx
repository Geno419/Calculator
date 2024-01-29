const Display = (props) => {
  return (
    <section className="display">
      <h1 id="calculatorScreen">{props.displayText}</h1>
    </section>
  );
};

export default Display;
