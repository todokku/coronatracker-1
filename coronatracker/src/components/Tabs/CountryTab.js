import React from "react";
import { Tab, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

export default function CountryTab(props) {
  const { country, index, handleClose, handleChange } = props;

  return (
    <Tab
      component="div"
      onClick={() => handleChange(index)}
      label={(
        <div>
          {country}
          <IconButton color="inherit" size="small" onClick={(e) => handleClose(e, index)}>
            <Close />
          </IconButton>
        </div>
      )}
    />
  )
}