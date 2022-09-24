import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import AddIcon from "@mui/icons-material/Add";
import { ModallAdd } from "./ModalAdd";
import { saladData } from "../foodData";

export const Salads = ({ dishes, setDishes }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  // const [dishes, setDishes] = React.useState([]);
  // console.log(dishes);
  const deleteDish = (index) => {
    setDishes(dishes.filter((item, i) => i !== index));
  };

  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <DinnerDiningIcon />
        </ListItemIcon>
        <ListItemText primary="Салат" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleOpen()}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>

            <ListItemText primary="Добавить салат" />
          </ListItemButton>
          {dishes.length > 0
            ? dishes.map((dish, i) => (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon onClick={() => deleteDish(i)}>
                    <RemoveIcon />
                  </ListItemIcon>
                  <ListItemText primary={dish.dish.label} secondary={`${dish.weight} кг`} />
                </ListItemButton>
              ))
            : ""}
        </List>
      </Collapse>
      <ModallAdd
        handleClose={handleClose}
        open={openModal}
        data={saladData}
        setDishes={setDishes}
        dishes={dishes}
      />
    </div>
  );
};
