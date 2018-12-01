const getItems = (items, { text, category, sortBy }) => {
  return items.filter((item) => {
    const textMatch = item.name.toLowerCase().includes(text.toLowerCase());
    const categoryMatch = category === 'all' ? true : item.category === category;
    const isBought = !item.isBought;
    return textMatch && isBought && categoryMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1;
    }
  });
};

export default getItems;