import axios from "axios";
import { API, CANDIDATE_ID, Endpoints } from "./apiConstants";
import { delayRequest } from "./helpers";
import { Polyanet } from "./types/polyanet.type";
import { Point } from "./types/astral.type";
import { Soloon } from "./types/soloon.type";
import { Cometh } from "./types/cometh.type";
import { MultiverseResponse } from "./types/api.type";
import axiosRetry from "axios-retry";

// <<<<<< ENDPOINTS >>>>>>

axiosRetry(axios, { retries: 3 });

export const updatePolyanetPoints = async (polyanets: Polyanet[]) => {
  for (let polyanet of polyanets) {
    await updatePolyanetPoint(polyanet);
    await delayRequest();
  }
};

export const updateSoloonPoints = async (soloons: Soloon[]) => {
  for (let soloon of soloons) {
    await updateSoloonPoint(soloon);
    await delayRequest();
  }
};

export const updateComethPoints = async (comeths: Cometh[]) => {
  for (let cometh of comeths) {
    await updateComethPoint(cometh);
    await delayRequest();
  }
};

export const getMegaverseGoal = async (): Promise<any[]> => {
  try {
    const response: MultiverseResponse = await axios.get(
      API + `map/${CANDIDATE_ID}/goal`
    );

    return response.data.goal;
  } catch (ex) {
    //Implement retry, otrerwise exeption
    return [];
  }
};

export const deletePolyanetPoints = async (points: Point[]) => {
  for (let point of points) {
    await deletePolyanetsPoint(point);
    await delayRequest();
  }
};

export const deleteSoloonPoints = async (points: Soloon[]) => {
  for (let point of points) {
    await deleteSoloonPoint(point);
    await delayRequest();
  }
};

export const deleteComethPoints = async (comeths: Cometh[]) => {
  for (let cometh of comeths) {
    await deleteComethPoint(cometh);
    await delayRequest();
  }
};

// <<<<<< ENDPOINTS >>>>>>

const updatePolyanetPoint = async (polyanet: Polyanet) => {
  try {
    await callAxiosPostEndpoint(Endpoints.POLYANETS, polyanet);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateSoloonPoint = async (soloon: Soloon) => {
  try {
    await callAxiosPostEndpoint(Endpoints.SOLOONS, soloon);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateComethPoint = async (cometh: Cometh) => {
  try {
    await callAxiosPostEndpoint(Endpoints.COMETHS, cometh);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deletePolyanetsPoint = async (polyanet: Polyanet) => {
  const params = { ...polyanet, candidateId: CANDIDATE_ID };

  try {
    return axios.delete(API + Endpoints.POLYANETS, { data: params });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteSoloonPoint = async (soloon: Soloon) => {
  const params = { ...soloon, candidateId: CANDIDATE_ID };

  try {
    return axios.delete(API + Endpoints.SOLOONS, { data: params });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteComethPoint = async (cometh: Cometh) => {
  const params = { ...cometh, candidateId: CANDIDATE_ID };

  try {
    return axios.delete(API + Endpoints.COMETHS, { data: params });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const callAxiosPostEndpoint = async (
  endpoint: Endpoints,
  data: Soloon | Cometh | Polyanet
) => {
  const params = { ...data, candidateId: CANDIDATE_ID };

  return axios.post(API + endpoint, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
