import { Typography } from "@material-ui/core";
import { defineMessages } from "react-intl";

const messages = defineMessages({
  prefix: "-",
});

export const Task = ({ description }) => {
  return (
    <Typography variant="h5" color="textSecondary">
      {messages.prefix} {description}
    </Typography>
  );
};
