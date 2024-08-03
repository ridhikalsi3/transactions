// const { Transaction } = require("../models/Transaction.js");
import { Transaction } from "../models/Transaction.js";
export const add_transaction = async(doc) =>{
    try {
        const user = await Transaction(doc);
        return user;
    }catch(err) {
        throw err;
    }
}
    // return !!user;
export const get_transaction = async(doc) =>{
    try {
        const user = await Transaction(doc);
        return user;
    }catch(err) {
        throw err;
    }
   
}
// module.exports = add_transaction;