const truncateDescription = (description: string, maxChars: number = 210) =>
  `${description.slice(0, maxChars)}...`;

export default truncateDescription;
