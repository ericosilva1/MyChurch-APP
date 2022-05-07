import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import apiUtils from "../utils/api.utils";

const RoomCard = ({ name, maxAge, minAge, getAllRooms, _id }) => {
  const deleteRoom = async (id) => {
    try {
      await apiUtils.deleteRoom(id);
      await getAllRooms();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card sx={{ maxWidth: 700, minWidth: 100, m: 2 }}>
      <CardActionArea>
        <CardMedia component="div" height="140" width="100%" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h4>{name}</h4>
            <p>
              Room to receive children from <span>{minAge}</span> to{" "}
              <span>{maxAge}</span>
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton onClick={() => deleteRoom(_id)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <EditOutlinedIcon />
      </IconButton>
    </Card>
  );
};

export default RoomCard;