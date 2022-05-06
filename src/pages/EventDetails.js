import React from "react";
import {
  ButtonGroup,
  Button,
  Chip,
  Paper,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import eventData from "./eventData";

export default function EventDetails(props) {
  const { eventId } = useParams();
  const eventDetails = eventData.find((e) => e.id == eventId);
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <Stack sx={{ margin: "20px auto", width: "800px" }}>
      <Typography
        component="h1"
        variant="h5"
        sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
      >
        {eventDetails.name}
      </Typography>
      {isAdmin ? (
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "end" }}
        >
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Attending Members: <Chip label="30 / 50" />
          </Typography>
        </Stack>
      ) : (
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "end" }}
        >
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Are you interested to attend the event?
            <ButtonGroup size="small" sx={{ marginLeft: 1 }}>
              <Button variant="contained">Yes</Button>
              <Button variant="outlined">No</Button>
            </ButtonGroup>
          </Typography>
        </Stack>
      )}
      <Paper sx={{ padding: "20px" }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          {eventDetails.images?.map((image) => (
            <img
              src={image}
              alt="image"
              height="370px"
              sx={{ objectFit: "cover" }}
            />
          ))}
        </Stack>
        <Typography
          variant="body2"
          sx={{ marginTop: 2, marginBottom: 2, fontWeight: "bold" }}
        >
          Dear Members
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>
          {eventDetails.description}
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>
          {eventDetails.longDescription}
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>
          Time: {eventDetails.datetime}
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>
          Place: {eventDetails.place}
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>
          Google Maps:{" "}
          <a href={eventDetails.mapLocation}>{eventDetails.mapLocation}</a>
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>
          Duration: {eventDetails.duration}
        </Typography>
      </Paper>
    </Stack>
  );
}
