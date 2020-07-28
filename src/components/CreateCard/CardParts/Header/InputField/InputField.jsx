import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function renderTitleTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Enter your Chirper title here!
    </Tooltip>
  );
}

const InputField = (props) => {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTitleTooltip}
    >
      <FormControl
        id="chirperHeader"
        defaultValue={props.change ? props.myInput : ""}
        placeholder="Chirper Title"
        autoFocus
      />
    </OverlayTrigger>
  );
};

export default InputField;
