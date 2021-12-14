const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true, "Please Enter Product Name"]
  },
  description:{
    type:String,
    required:[true, "Please Enter Product Description"]
  },
  Price:{
    type:Number,
    required:[true, "Please Enter Product Price"],
    maxLength:[8, "Price can not exit 8 figures"]
  },
  rating:{
    type:Number,
    default:0
  },
  images:{
    public_id:{
      type:String,
      required:true
    },
    url:{
      type:String,
      required:true
    }
  }
})