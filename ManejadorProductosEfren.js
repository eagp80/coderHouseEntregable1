class ProductManager {
    constructor() {
      this.products = [];
    
    }
    static contador = 0;
      
    addProduct(title, description, price,thumbnail,code,stock) {
      let faltanDatos = false; 
      const arr=[title,description,price,thumbnail,code,stock];//para verificar con forEach
      arr.forEach(e=>{
        if(e===undefined){            
           faltanDatos=true;
        }
      });       
      if(faltanDatos===true) {
        console.log("Faltan datos, no se agregó el producto");
        return} else{             
      const verificarCode= this.products.findIndex(p=>p.code ===code);
      if(verificarCode!==-1){
        console.log(`Code ${code} ya existente debe asignarle un código diferente.`, "No se agregó el producto.");
        return;
      } 
      const newProduct = {
        id:ProductManager.contador,
        title: title,
        description: description,
        price:price,
        thumbnail:thumbnail,
        code:code,
        stock:stock,
      };
  
      this.products.push(newProduct);
      ProductManager.contador++; 
    }     
    }
  
  
    getProducts() {
      console.log("Lista de productos:", this.products);
      return this.products;
    }
    
    getProductById(Id){
      const indexProduct = this.products.findIndex(p=>p.id===Id);
      if(indexProduct===-1){
        console.log("Not found");
        return "Not found";
      }   
      console.log("El productos es:",this.products[indexProduct]);
      return this.products[indexProduct];
    }
  }
  
  const productManager = new ProductManager();
  
  productManager.addProduct("Producto 1", "Descripción del producto 1", 100, "imagen/logo1.jpg", 1, 5);
  productManager.addProduct("Producto 2", "Descripción del producto 2", 200, "imagen/logo2.jpg", 2, 12);
  productManager.getProducts();
  productManager.getProductById(1);
  productManager.getProductById(0);
  productManager.getProductById(3);
  productManager.addProduct("Producto 3", "Descripción del producto 3", 500, "imagen/logo3.jpg", 1, 5);
  productManager.addProduct("Producto 3", "Descripción del producto 3", 500, "imagen/logo3.jpg");
  productManager.getProducts();
  


