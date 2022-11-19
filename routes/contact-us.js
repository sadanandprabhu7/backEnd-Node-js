
const express=require('express')

const router = express.Router()

const contactUsController=require('../controller/contact-us')

router.get('/contact-us',contactUsController.contactUsController)
router.post("/resp",contactUsController.postController)
  
  router.get('/success',(req,res,next)=>{
    res.send('<h1>form submitted sucessfully</h1>')
  })

  module.exports = router;