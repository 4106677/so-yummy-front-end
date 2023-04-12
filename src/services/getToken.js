export const getToken = () => {
  let serializedState = localStorage.getItem('persist:auth');
  const serializedStateParse =
    serializedState === null ? undefined : JSON.parse(serializedState);
  if (serializedStateParse === undefined) {
    return;
  }
  return `Bearer ${serializedStateParse.token.slice(1, -1)}`;
};
