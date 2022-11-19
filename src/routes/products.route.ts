import { Router } from "express";
import { createProducts,getProducts,getProductById,updateProductById,deleteProductById } from "../controllers/product.controller";

 const router = Router();

router.post('/',createProducts)
router.get('/',getProducts)
router.get('/:productId',getProductById)
router.put('/:productId',updateProductById)
router.delete('/:productId',deleteProductById)

export default router;