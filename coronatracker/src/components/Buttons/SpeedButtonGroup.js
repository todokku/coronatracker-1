import React from "react";
import { Tooltip } from "@material-ui/core"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root: {
    background: '#3C3F58',
    color: '#3BBA9C',
    "&:hover": {
      background: '#3C3F58',
    }
  },
  button: {
    background: "#3C3F58",
    color: "#212121",
    "&:hover": {
      background: "#3C3F58",
      color: "#3BBA9C",
      fontWeight: "bolder",
      opacity: 0.8,
    },
    "&.Mui-selected": {
      background: '#3C3F58',
      color: "#3BBA9C",
      fontWeight: "bold",
      "&:hover": {
        background: "#3C3F58",
        opacity: 1,
      },
    }
  }
});

export default function SpeedButtonGroup(props) {
  const { speed, setSpeed } = props;
  const classes = useStyles();

  const handleChange = (_, newSpeed) => {
    if (newSpeed) {
      setSpeed(newSpeed);
    }
  };

  return (
    <Tooltip title="Change playback speed">
      <ToggleButtonGroup
        className={classes.root}
        value={speed}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton className={classes.button} value={0.25}>
          0.25x
        </ToggleButton>
        <ToggleButton className={classes.button} value={0.5}>
          0.5x
        </ToggleButton>
        <ToggleButton className={classes.button} value={1}>
          1x
        </ToggleButton>
        <ToggleButton className={classes.button} value={2}>
          2x
        </ToggleButton>
      </ToggleButtonGroup>
    </Tooltip>
  )
}