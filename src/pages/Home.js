import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChildList from "../components/ChildList";
import apiUtils from "../utils/api.utils";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";

const Home = () => {
  const [children, setChildren] = useState([]);

  const navigate = useNavigate();

  const getAllCchildren = async () => {
    try {
      const children = await apiUtils.getChildren();
      setChildren(children);
    } catch (error) {
      console.error(error.status, error.message);
      navigate("/login");
    }
  };

  useEffect(() => {
    getAllCchildren();
  }, []);

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <ChildList children={children} getAllCchildren={getAllCchildren} />
      </Container>
    </>
  );
};

export default Home;
