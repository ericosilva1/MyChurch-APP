import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RoomList from "../components/RoomList";
import apiUtils from "../utils/api.utils";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";


const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const navigate = useNavigate();

  const getAllRooms = useCallback(async () => {
    try {
      const rooms = await apiUtils.getRooms();
      setRooms(rooms);
    } catch (error) {
      console.error(error.status, error.message);
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    getAllRooms();
  }, [getAllRooms]);

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <RoomList rooms={rooms} getAllRooms={getAllRooms} />
      </Container>
    </>
  );
};

export default Rooms;
