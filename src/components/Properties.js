import PropTypes from "prop-types";
import React from "react";

export default function Properties(props) {
  return (
    <div>
      <h2>{props.porDefault}</h2>
      <ul>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "true" : "false"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.object.name + " - " + props.object.email}</li>
        <li>{props.elementReact}</li>
        <li>{props.array.map(props.function).join(", ")}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Properties.defaultProps = {
  porDefault: "Las Props",
};

Properties.propTypes = {
  number: PropTypes.number.isRequired,
};
