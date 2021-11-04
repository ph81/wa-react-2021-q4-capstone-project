export const formatPrice = (number) => {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number / 100);
  };

//check if item is already in the cart
export const isInCart = (product, cartItems) => {
  return cartItems.find(item => item.id === product.id);
}