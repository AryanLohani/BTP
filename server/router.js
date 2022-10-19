const  express = require('express');
const router = express.Router();

router.get('/api', (req , res) =>{
    res.send({text : "server is up and running"});
});

router.post('/api/motors', (req, res)=>{
    res.send(req);
    console.log('receiving data ...');
    console.log('body is ',req.body);
})

module.exports = router;