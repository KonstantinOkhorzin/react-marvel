const generateRandomId = (minId: number, maxId: number): number =>
  Math.round(Math.random() * (maxId - minId) + minId);

export default generateRandomId;
