const getItems = (items) => {
  return items.filter((item) => {
    const isBought = item.isBought;
    return isBought;
  });
};

export default getItems;