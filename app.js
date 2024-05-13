const product = {
    product_id: "1",
    product_name: "Milkshake",
    quantity_in_stock: 100,
    unit_price: 19.99,
    product_description: {
        product_brand: "Brand Name",
        size_or_quantity: "500ml",
        taste_or_scent: "Vanilla",
        colour: "White",
        additional_description: "Extra details about the product."
    }
};

console.log("Product ID: ", product.product_id);
console.log("Product Name: ", product.product_name);
console.log("Quantity in Stock: ", product.quantity_in_stock);
console.log("Unit Price: ", product.unit_price);
console.log("Product Brand: ", product.product_description.product_brand);
console.log("Size or Quantity: ", product.product_description.size_or_quantity);
console.log("Taste or Scent: ", product.product_description.taste_or_scent);
console.log("Colour: ", product.product_description.colour);
console.log("Additional Description: ", product.product_description.additional_description);
