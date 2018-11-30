const getItems = (items, { text }) => {
  return items.filter((item) => {
    const textMatch = item.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
};

export default getItems;