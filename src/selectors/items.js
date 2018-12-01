const getItems = (items, { text }) => {
  return items.filter((item) => {
    const textMatch = item.name.toLowerCase().includes(text.toLowerCase());
    const isBought = !item.isBought;
    return textMatch && isBought;
  });
};

export default getItems;