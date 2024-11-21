export const formatPrice = (price: string | number): string => {
  // Convert the price to a number and then use toLocaleString to add commas
  const formattedPrice = Number(price).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD', // Change 'USD' to match your currency code
  });

  return formattedPrice;
};
