import fs from 'fs-extra';
import path from 'path';
import { Product } from '../models/product';

const filePath = path.join(__dirname, '../../products.json');

export const readProducts = async (): Promise<Product[]> => {
    const data = await fs.readJson(filePath);
    return data.products
};

export const writeProducts = async (products: Product[]): Promise<void> => {
    await fs.writeJson(filePath, {products}, { spaces: 2 });
};
