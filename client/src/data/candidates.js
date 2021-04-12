import moment from "moment";

export const formatAllCandidates = (data) => {
  const candidates = [];

  data.forEach(element => {
    candidate.push(formatOneCandidate(element));
  })

  return candidates;
};

export const formatOneCandidate = ({
  jobTitle,
  jobStatus,
  companyName,
  startDate,
  endDate,
  isCurrent,
  location,
  project,
  techStack:
  stack,
  tasks,
}) => {
  return {
    jobTitle,
    jobStatus,
    companyName,
    period: `${moment(startDate).format("MMM YYYY")} - ${moment(endDate).format("MMM YYYY")}`,
    duration: Math.ceil(moment.duration(moment(endDate).diff(moment(startDate))).asMonths()),
    isCurrent,
    location,
    project,
    stack,
    tasks,
  };
};
