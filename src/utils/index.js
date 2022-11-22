// Calculate Remaining time
export const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const timeDuration = new Date(expirationTime).getTime();

  const remainingDuration = timeDuration - currentTime;
  return remainingDuration;
};
