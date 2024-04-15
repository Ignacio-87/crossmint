import axios from "axios";
import { API, CANDIDATE_ID } from "./apiConstants";
import { Point } from "./constants";
import { RequestPoint } from "./types";

const getParams = (points: RequestPoint) => {
  return { ...points, candidateId: CANDIDATE_ID };
};

const updatePolynetPoint = (point: Point) => {
  const params = getParams(point);

  return axios.post(API + "polyanets", params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const deletePolynetsPoint = async (point: Point) => {
  const params = getParams(point);

  return axios.delete(API + "polyanets", { data: params });
};

const delayRequest = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export const updatePolynetsPoints = async (points: Point[]) => {
  for (let point of points) {
    await updatePolynetPoint(point);
    await delayRequest();
  }
};

export const deletePolynetsPoints = async (points: Point[]) => {
  for (let point of points) {
    await deletePolynetsPoint(point);
    await delayRequest();
  }
};
