import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown(props) {
  // UseSTate HOok
  const [age, setAge] = React.useState("");

  // handleChange Function
  const handleChange = (event) => {
    setAge(event.target.value);
    props.onChange(event.target.value); // Call onChange function passed via props
  };

  return (
    <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={props.name}
          onChange={handleChange}
        >
          {props.options.map((e, key) => {
            return (
              <MenuItem key={key} value={e}>
                {e}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
