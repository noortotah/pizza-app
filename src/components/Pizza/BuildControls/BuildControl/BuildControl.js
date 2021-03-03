import PropsType from "prop-types";

const BuildControl = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
      {props.label}
      <div>
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={props.removed}
          disabled={props.disabled}>
          Less
        </button>
        <span className="badge badge-pill mr-2">{props.count}</span>
        <button type="button" className="btn btn-primary" onClick={props.added}>
          More
        </button>
      </div>
    </li>
  );
};

BuildControl.propsType = {
    label : PropsType.string,
    added: PropsType.func,
    removed: PropsType.func,
    disabled: PropsType.func
}

export default BuildControl;
