import React from "react";
import {
  Button,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Link,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import eventData from "./eventData";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || eventData,
    };
  }

  renderListItem = (channel) => {
    return (
      <Link
        key={channel.id}
        className="Events-link"
        href={`#/events/${channel.id}`}
        sx={{ textDecoration: "none", color: "#000" }}
      >
        <ListItem
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            alignItems: "center",
            marginBottom: "8px",
            borderRadius: "10px",
          }}
          alignItems="flex-start"
        >
          <ListItemAvatar sx={{ margin: 0 }}>
            <Avatar alt="Page pic">{channel.name.charAt(0)}</Avatar>
          </ListItemAvatar>
          <ListItemText sx={{ margin: 0 }} primary={channel.name} />
        </ListItem>
      </Link>
    );
  };

  renderList = () => {
    const { data } = this.state;
    return (
      <Stack
        sx={{
          bgcolor: "background.paper",
        }}
      >
        {data?.map(this.renderListItem)}
      </Stack>
    );
  };

  render() {
    const isAdmin = localStorage.getItem("isAdmin");
    return (
      <Stack sx={{ margin: "20px auto", width: "600px" }}>
        <Stack direction="row" sx={{ marginBottom: 2 }}>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
              flex: 1,
            }}
          >
            Upcoming Events
          </Typography>
          {isAdmin && (
            <Button variant="contained" size="small">
              Create Event
            </Button>
          )}
        </Stack>
        {this.renderList()}
      </Stack>
    );
  }
}

export default Events;
