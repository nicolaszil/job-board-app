import { defineMessages } from "react-intl";
import { Card, CardContent, Divider, makeStyles, Typography } from "@material-ui/core";

import { Task } from "./CandidateTask";

const messages = defineMessages({
  project: "Projet :",
  durationLabel: "Durée :",
  durationDetail: "mois",
  stack: "Stack :",
});

export const Detail = ({
  jobTitle, 
  jobStatus,
  companyName,
  period,
  location,
  duration,
  project,
  stack,
  tasks,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="secondary">{jobTitle}</Typography>
        <Typography variant="h5" color="primary">{companyName} - {jobStatus}</Typography>
        <Typography variant="h5" color="textPrimary">{period}</Typography>
        <Typography variant="h5" color="textPrimary">{location}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h5" color="textSecondary">{messages.project} {project}</Typography>
        <Typography variant="h5" color="textSecondary">
          {messages.durationLabel} {duration} {messages.durationDetail}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h5" color="textSecondary">{messages.stack} {stack}</Typography>
      </CardContent>
      <CardContent>
        {tasks.map((task, index) => <Task key={index} description={task} />)}
      </CardContent>
      <Divider />
    </Card>
  );
};
