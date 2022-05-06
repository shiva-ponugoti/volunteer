import React from "react";
import {
  Button,
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
import Events from "./Events";
import eventData from "./eventData";

export default function ChannelDetails(props) {
  const { channelId } = useParams();
  const rows = [
    { name: "user1", email: "email1@gmail.com", organization: "DBS" },
    { name: "user2", email: "email2@gmail.com", organization: "DBS" },
    { name: "user3", email: "email3@gmail.com", organization: "DBS" },
    { name: "user4", email: "email4@gmail.com", organization: "DBS" },
    { name: "user5", email: "email5@gmail.com", organization: "DBS" },
    { name: "user6", email: "email6@gmail.com", organization: "DBS" },
    { name: "user7", email: "email7@gmail.com", organization: "DBS" },
    { name: "user8", email: "email8@gmail.com", organization: "DBS" },
    { name: "user9", email: "email9@gmail.com", organization: "DBS" },
    { name: "user10", email: "email10@gmail.com", organization: "DBS" },
    { name: "user11", email: "email11@gmail.com", organization: "DBS" },
    { name: "user12", email: "email12@gmail.com", organization: "DBS" },
    { name: "user13", email: "email13@gmail.com", organization: "DBS" },
    { name: "user14", email: "email14@gmail.com", organization: "DBS" },
    { name: "user15", email: "email15@gmail.com", organization: "DBS" },
    { name: "user16", email: "email16@gmail.com", organization: "DBS" },
    { name: "user17", email: "email17@gmail.com", organization: "DBS" },
    { name: "user18", email: "email18@gmail.com", organization: "DBS" },
    { name: "user19", email: "email19@gmail.com", organization: "DBS" },
    { name: "user20", email: "email20@gmail.com", organization: "DBS" },
  ];

  const renderTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Volunteer Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="right">
                Email Id
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="right">
                Organization
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.organization}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  const userJoined = channelId !== "2";

  return (
    <Stack sx={{ margin: "20px auto", width: "800px" }}>
      <Events data={[eventData[parseInt(channelId, 10) - 1]]} />
      {userJoined && (
        <Typography
          component="h1"
          variant="h5"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Joined Members
        </Typography>
      )}
      <Stack sx={{ marginTop: "10px" }}>
        {userJoined ? (
          renderTable()
        ) : (
          <Paper sx={{ padding: "20px" }}>
            <Typography variant="body2">
              You have not joined the channel yet. Please join the channel to
              get the corresponding updates by clicking on the following Join
              button.
            </Typography>
            <Stack>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: "100px" }}
              >
                Join
              </Button>
            </Stack>
          </Paper>
        )}
      </Stack>
    </Stack>
  );
}
