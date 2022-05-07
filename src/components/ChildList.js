import React from "react";
import Box from "@mui/material/Box";
import ChildCard from "../components/ChildCard";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";

const ChildList = ({ children, getAllCchildren }) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          marginTop: 2,
          minHeight: 300,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {children.map((child) => (
          <ChildCard
            sx={{ padding: 10 }}
            key={child._id}
            {...child}
            getAllCchildren={getAllCchildren}
          />
        ))}
      </Box>
      <Link
        style={{ position: "absolute", right: "20px", bottom: "20px" }}
        to="/private/childform"
      >
        <AddButton />
      </Link>
    </>
  );
};

export default ChildList;
