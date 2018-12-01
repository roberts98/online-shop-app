const getItems = (items, id) => {
  return items.filter((item) => {
    const isBought = item.isBought && (item.buyerId === id)
    return isBought;
  });
};

export default getItems;