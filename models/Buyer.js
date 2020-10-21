const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const buyerSchema = new mongoose.Schema({
    _id:{
        type: ObjectId,
        ref: 'User'
    },

    // cart:[
    //    {product:{
    //        type: ObjectId,
    //        ref:'Product'
    //    }},
    //    {price:{
    //        type:Number
    //    }},
    //    {quantity:{
    //        type:Number
    //    }},
    // ],
    cart:[{
        product:{
            type: ObjectId,
            ref:'Product'
        },
        price:{
            type:Number
        },
        quantity:{
            type:Number
        },
    }
       
     ],

    //    {shippingInfo:{
    //       {location:{
    //           type:String
    //          }
    //       },
    //       {phoneNum:{
    //           type:Number
    //          }
    //       }
    //     }}
    // {
    //     shippingInfo:{
    //         location:String,
    //         phoneNum:Number
    //     }
    // }
  orderAt: {type: Date},

  shippingInfo:{
            location:String,
            phone:Number
        }
});

module.exports = mongoose.model("Buyer", buyerSchema);