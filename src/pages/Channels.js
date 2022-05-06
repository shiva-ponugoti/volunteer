import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Link,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import channelData from "./channelData";

class Channels extends React.Component {
  renderListItem = (channel) => {
    return (
      <Link
        key={channel.id}
        className="Channels-link"
        href={`#/channels/${channel.id}`}
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
    return (
      <Stack
        sx={{
          bgcolor: "background.paper",
        }}
      >
        {channelData?.map(this.renderListItem)}
      </Stack>
    );
  };

  render() {
    return (
      <Stack sx={{ margin: "20px auto", width: "600px" }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          Available Groups
        </Typography>
        {this.renderList()}
      </Stack>
    );
  }
}

export default Channels;
