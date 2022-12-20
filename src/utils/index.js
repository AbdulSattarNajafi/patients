// Calculate Remaining time
export const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const timeDuration = new Date(expirationTime).getTime();

  const remainingDuration = timeDuration - currentTime;
  return remainingDuration;
};

export const getCurrentUser = (users) => {
    const userId = localStorage.getItem('ID');
    return users.filter((user) => user.id === userId);
};
