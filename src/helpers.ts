export const delayRequest = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
