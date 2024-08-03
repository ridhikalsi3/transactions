import { addTransaction,getAllTransaction,get_Category_Ids} from "../controllers/transactionController.js";
import express from 'express';
//import { get_Category_Ids } from "../controllers/transactionController.js";

export const router = express.Router();
// const { addTransaction } = require('../controllers/transactionController');
// const { getAllTransaction } =require('../controllers/transactionController')
 router.post('/add-transaction',addTransaction)

 router.get('/get-transaction',getAllTransaction)

 router.get("/get-category-ids",get_Category_Ids)


 //export default router;