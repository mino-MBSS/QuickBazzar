const Buyer = require('./../models/Buyer');
const Seller = require('./../models/Seller');

const Item ={
  id:String,
  price:Number,
  quantity:Number
}

exports.addToCart = async(req, res) => {
   const buyer =  await Buyer.findById(req.userId);
   const products = req.body.products;
   const shippingDetails = req.body.shippingDetails;

   for(i=0; i<products.length; i++){
            const item = Object.create(Item);
            item.product = products[i].Id;
            // console.log("i="+i +","+ item.product);

            item.price = products[i].price;
            // console.log("i="+i +","+ item.price);

            item.quantity = products[i].qty;
            // console.log("i="+i +","+ item.quantity);

            buyer.cart.push(item);
            // console.log(item);
   }

buyer.shippingInfo.location = shippingDetails.shippingAddress;
buyer.shippingInfo.phone = shippingDetails.phone;

console.log(buyer.cart)

await buyer.save();

}

