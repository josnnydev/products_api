import { Request, Response } from "express";
import Product from "../models/Product";

export const createProducts = async (req: Request, res: Response) => {
  const { name, category, price, imgURL } = req.body;
  try {
    const newProduct = new Product({ name, category, price, imgURL });

    const productSave = await newProduct.save();

    res.json(productSave);
  } catch (error) {
    res.json(error);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await Product.find();
    res.json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getProductById = async(req: Request, res: Response) => {
    const id = req.params.productId  
    try {
    const response = await Product.findById(id)
    res.json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const updateProductById = async(req: Request, res: Response) => {
  const id = req.params.productId
  const cuerpo = req.body
  try{
    const response = await Product.findByIdAndUpdate(id,cuerpo,{new: true})
    res.json(response);
  }catch(error){
    res.status(404).send(error)
  }
 
};

export const deleteProductById =async (req: Request, res: Response) => {
  const id = req.params.productId
try{
  await Product.findByIdAndDelete(id);
  res.json(`Data con el id: ${id} ha sido eliminado`);
}catch(error){
  res.status(404).json(error)
}
  
};
