import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import apiUtils from "../utils/api.utils";
import { Link } from "react-router-dom";

const ChildCard = ({ name, age, _id, getAllCchildren }) => {
  const checkInOut = async () => {
    try {
      const rooms = await apiUtils.getRooms();
      const rightRoom = rooms.find((room) => {
        return room.maxAge >= age && room.minAge <= age;
      });

      if (rightRoom === undefined) {
        throw new Error("We cannot find a room.");
      }
      const { message } = await apiUtils.childCheckInCheckOut(
        rightRoom._id,
        _id
      );
      alert(`${message} in ${rightRoom.name}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteChild = async (id) => {
    try {
      await apiUtils.deleteChild(id);
      await getAllCchildren();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card sx={{ maxWidth: 850, minWidth: 300, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="picture"
          height="140"
          width="100%"
          image="#"
          alt="#"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h4>{name}</h4>
            <li>
              <span>Age: </span>
              {age}
            </li>
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton onClick={() => deleteChild(_id)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Link to={`/private/childedit/${_id}`}>
        <IconButton aria-label="edit">
          <EditOutlinedIcon />
        </IconButton>
      </Link>
      <IconButton onClick={() => checkInOut()} aria-label="edit">
        <SendOutlinedIcon />
      </IconButton>
    </Card>
  );
};

export default ChildCard;
