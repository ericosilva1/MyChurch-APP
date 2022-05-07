import React from "react";
import Box from "@mui/material/Box";
import RoomCard from "../components/RoomCard";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";
import RoomForm from "./RoomForm";

const RoomList = ({ rooms, getAllRooms }) => {
  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          wrap: "wrap",
        }}
      >
        {rooms.map((room) => (
          <RoomCard
            sx={{ padding: 10 }}
            key={room._id}
            {...room}
            getAllRooms={getAllRooms}
          />
        ))}
        <Link
          style={{ position: "absolute", right: "20px", bottom: "20px" }}
          to="/private/roomform"
          element={<RoomForm />}
        >
          <AddButton />
        </Link>
      </Box>
    </>
  );
};

export default RoomList;
