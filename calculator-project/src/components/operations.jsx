const Operations = (props) => {
  return (
    <section className="operations">
      <button onClick={props.clear}>clear</button>
      <button onClick={props.backspace}>&lt;- Backspace</button>
      <button onClick={props.getOpInput} id="+">
        +
      </button>
      <button onClick={props.getOpInput} id="-">
        -
      </button>
      <button onClick={props.getOpInput} id="*">
        x
      </button>
      <button onClick={props.getOpInput} id="/">
        &divide;
      </button>
      <button onClick={props.getResult} id="=">
        =
      </button>
    </section>
  );
};

export default Operations;
