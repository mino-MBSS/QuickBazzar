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
  //  console.log(products);
   const shippingDetails = req.body.shippingDetails;

    //  for(i=0; i<products.length; i++){
    //    buyer.update(
    //      {
    //      $push:{
    //        cart:{product: products[i].Id, price: products[i].price, quantity: products[i].qty}
    //            }
    //       }
    //         )
    //  }
       for(i=0; i<products.length; i++){
               buyer.cart[i].product =products[i].Id;
               console.log(buyer.cart[i].product);

               buyer.cart[i].price =products[i].price;
               console.log(buyer.cart[i].price);

               buyer.cart[i].quantity =products[i].qty;
               console.log(buyer.cart[i].quantity);

               buyer.cart.push(buyer.cart[i]);
       }
  // console.log(buyer.cart)

buyer.shippingInfo.location = shippingDetails.shippingAddress;
buyer.shippingInfo.phone = shippingDetails.phone;


await buyer.save();

}

  //  for(i=0; i<products.length; i++){
  //           const item = Object.create(Item);
  //           item.product = products[i].Id;
  //           // console.log("i="+i +","+ item.product);

  //           item.price = products[i].price;
  //           // console.log("i="+i +","+ item.price);

  //           item.quantity = products[i].qty;
  //           // console.log("i="+i +","+ item.quantity);

  //           buyer.cart.push(item);
  //           // console.log(item);
  //  }
  // [
  //   {
  //     Id: '5f830102be89002e5cfb3055',
  //     qty: 3,
  //     name: 'Samsung Galaxy A100',
  //     price: 35000
  //   },
  //   {
  //     Id: '5f81c4f7205f8f2e10dcd89d',
  //     qty: 2,
  //     name: 'Iphone12',
  //     price: 200
  //   }
  // ]
  // for(i=0; i<products.length; i++){
  //   // buyer.cart.push(products[i]);
  //   console.log(products[i].Id);
  //   console.log(products[i].price);
  //   console.log(products[i].qty);
  // }

    //  buyer.update(
  //    {$push:{cart:{$each:products}}},
  //   //  {cart.shippingInfo.location:},
  //  )
