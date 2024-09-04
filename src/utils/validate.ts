export const validateProduct = (product: any): boolean => {
    if (typeof product.price !== 'number' || product.price <= 0) return false;
    if (typeof product.stock.available !== 'number' || product.stock.available < 0) return false;
    return true;
};
