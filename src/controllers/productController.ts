import { Request, Response } from 'express';
import * as productService from '../services/productService';

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    const { category } = req.query;
    const products = await productService.getProducts(category as string);
    res.json(products);
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    const product = req.body;
    await productService.createProduct(product);
    res.status(201).json({ message: 'Product created successfully' });
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updates = req.body;
    const updatedProduct = await productService.updateProduct(id, updates);
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export const softDeleteProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const success = await productService.softDeleteProduct(id);
    if (success) {
        res.json({ message: 'Product deleted successfully' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};
