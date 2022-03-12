/**
 * Convert the keys to snake_case
 * @param {*} objectList
 * @returns
 */
export const convertKeys = (objectList) => {
  const objectKeys = {
    name: 'Name',
    category: 'Category',
    description: 'Description',
    price: 'Price',
    calories: 'Calories',
    customer_rating: 'Customer Rating',
  };
  const resultArray = objectList.map((elm) => ({
    name: elm[objectKeys.name],
    category: elm[objectKeys.category],
    description: elm[objectKeys.description],
    price: elm[objectKeys.price],
    calories: elm[objectKeys.calories],
    customer_rating: elm[objectKeys.customer_rating],
  }));

  return resultArray;
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};
