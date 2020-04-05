import { Switch, TableCell } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const CustomSwitch = withStyles({
  switchBase: {
    color: '#3BBA9C',
    '&.Mui-checked': {
      color: '#3BBA9C'
    },
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#3BBA9C'
    },
    checked: {},
    track: {}
  }
})(Switch);


export const StyledTableCell = withStyles(() => ({
  head: {
    background: '#373b52',
    color: '#3BBA9C',
    fontSize: 16,
    fontWeight: "bolder"
  },
  body: {
    background: '#3C3F58',
    color: '#3BBA9C',
    fontSize: 14
  }
}))(TableCell);