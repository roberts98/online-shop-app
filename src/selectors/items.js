const getItems = (items, { text, category }) => {
  return items.filter((item) => {
    const textMatch = item.name.toLowerCase().includes(text.toLowerCase());
    const categoryMatch = category === 'all' ? true : item.category === category;
    const isBought = !item.isBought;
    return textMatch && isBought && categoryMatch;
  });
};

export default getItems;