import { DELAY_API } from "./apiConstants";

export const delayRequest = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, DELAY_API));
};
