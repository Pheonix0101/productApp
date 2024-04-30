const addToCart = (product)=>({
    type: 'ADD_TO_CART',
    payload: product
});

const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId
});



export { addToCart,removeFromCart};