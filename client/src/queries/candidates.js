import client from "../utils/axios";
import { generatePath } from "react-router";

import { App as endpoints } from "../../config/api/endpoints";
import { formatAllCandidates, formatOneCandidate } from "../data";

export const getAllCandidates = async (id, updater) => {
  try {
    const { data } = await client.get(endpoints.getAllCandidates);
    const candidates = formatAllCandidates(data);
    updater(candidates);
  } catch (error){
    console.log(error)
  }
};

export const getOneCandidate = async (id, updater) => {
  try {
    const { data } = await client.get(generatePath(endpoints.getOneCandidateById, { id }));
    const candidate = formatOneCandidate(data);
    updater(candidate);
  } catch (error){
    console.log(error)
  }
};