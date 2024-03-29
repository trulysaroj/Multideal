// Importing: --->
const express = require('express')
const router = express.Router()
const ProductsController = require('../controller/products')
const multer  = require('multer')




// Multer configuration: --->
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Math.floor(Math.random() *10000)+ file.originalname)
    }
  })

const upload = multer({ storage: storage })



// Endpoints --->
router.post("/products", upload.single('product'), ProductsController.addNewProducts)
router.get('/product-img/:id', ProductsController.getProductImageById)
router.get('/products', ProductsController.getAllProducts)
router.get('/products', ProductsController.getSearchProduct)
router.get('/product-details/:id',  ProductsController.getProductsDetails)




module.exports=router;