import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import Modal from "@mui/material/Modal";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Input, TextField } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const ModallAdd = ({ open, handleClose, data, dishes, setDishes }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [dish, setDish] = React.useState([]);
  const [weight, setWeight] = React.useState();

  const handleChange = (event) => {
    setDish(event.target.value);
  };
  // console.log(dish);

  const validateForm = (e) => {
    e.preventDefault();
    const data = {
      dish,
      weight,
    };
    // console.log(data);
    setDishes([...dishes, data]);
  };
  // useEffect(() => handleClose(false), [dishes]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Название</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={dish.label}
              label="Age"
              onChange={handleChange}>
              {data.map((i) => (
                <MenuItem value={i}>{i.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* <TextField type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /> */}
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                value={weight}
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
              <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
            </FormControl>
            <Button variant="contained" onClick={(e) => validateForm(e)}>
              Добавить
            </Button>
          </div>
        </Box>
      </Box>
    </Modal>
  );
};
