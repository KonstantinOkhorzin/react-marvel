const truncateDescription = (description: string, maxChars: number = 210) =>
  description.length > maxChars ? `${description.slice(0, maxChars)}...` : description;

export default truncateDescription;
