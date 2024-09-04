import { Product } from '../models/product';
import { readProducts, writeProducts } from '../utils/fsHandler';

export const getProducts = async (category?: string): Promise<Product[]> => {
    const products = await readProducts();
    return products.filter(product => !product.deleted && (!category || product.category === category));
};

export const createProduct = async (product: Product): Promise<void> => {
    const products = await readProducts();
    products.push(product);
    await writeProducts(products);
};

export const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product | null> => {
    const products = await readProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        const updatedProduct = { ...products[index], ...updates };
        products[index] = updatedProduct;
        await writeProducts(products);
        return updatedProduct;
    }
    return null;
};

export const softDeleteProduct = async (id: string): Promise<boolean> => {
    const products = await readProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index].deleted = true;
        await writeProducts(products);
        return true;
    }
    return false;
};
