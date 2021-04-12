import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getOneCandidate } from "../../queries/candidates";
import { Detail } from "./CandidateDetail";

export const Candidate = () => {
  const [candidate, setCandidate] = useState({})
  const { id: candidateId } = useParams();

  useEffect(() => {
    if (!candidateId) return;
		getOneCandidate(candidateId, setCandidate);
  }, []);

  if (Object.keys(candidate).length === 0) return null;

  return (
    <>
      {candidate && <Detail {...candidate} />}
    </>
  );
};
