const products = [
    {id:1,name:'product1', price:60},
    {id:2,name:'product2', price:70},
    {id:3,name:'product3', price:90}
]

function findById(id){
  let i=products.find((products)=>{
    return products.id===id
 })
 return i;
}

console.log(findById(5));

module.exports = {
    products,
    findById,

}