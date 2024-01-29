const Numbers = (props) => {
  return (
    <section className="numberPad">
      <button id="9" onClick={props.getNumInput}>
        9
      </button>
      <button id="8" onClick={props.getNumInput}>
        8
      </button>
      <button id="7" onClick={props.getNumInput}>
        7
      </button>
      <button id="6" onClick={props.getNumInput}>
        6
      </button>
      <button id="5" onClick={props.getNumInput}>
        5
      </button>
      <button id="4" onClick={props.getNumInput}>
        4
      </button>
      <button id="3" onClick={props.getNumInput}>
        3
      </button>
      <button id="2" onClick={props.getNumInput}>
        2
      </button>
      <button id="1" onClick={props.getNumInput}>
        1
      </button>
      <button id="0" onClick={props.getNumInput}>
        0
      </button>
    </section>
  );
};

export default Numbers;
