const app = require ('express')();
const PORT = 3000;
const {products,findById} = require ('./database/db')


app.get('/allproducts', (req, res) => {
    res.send(products);
  });

  app.get('/product/:id', (req, res) => {
    let id=req.params.id;
    pid=findById(id)
    if(pid==-1){
      res.send("not found")
    }
    else{
      res.send(products[pid])
    }
  });
  


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


