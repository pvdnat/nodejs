const express = require('express')

const router = express.Router()

router.get('/mount_ex',(req, res)=>{
    res.send(`<h1>Mounting Example</h1>`)
})

  
module.exports = router;