var express = require('express');
var router = express.Router();
var {Progress} = require('../../model/progress');
var multer  = require('multer')
var upload = multer({ storage: multer.memoryStorage({}) });

//router.use(fileUpload());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Heriot Watt - Tech Club' });
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Heriot Watt - Tech Club' });
});

/* GET Progress page. 
router.get('/progress', function(req, res, next) {
  Progress.find().then((progress) => {
    console.log('progress', progress);
  }, e => {
      res.status(400).send(e)
  })
  res.render('progress', { title: 'Heriot Watt - Tech Club' });
});

/* GET Progress add page. 
router.get('/addprogress', function(req, res, next) {
  res.render('addprogress', { title: 'Heriot Watt - Tech Club' });
});


/* POST weekly memo 
router.post('/addprogress', upload.single('doc'),  function(req, res) {
   
  const encoded = req.file.toString('base64')
  // Checks if file is there or not
 /* if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let file = req.file.file;
  file.mv('/document/'+req.file.file.name+'');
  res.render('addprogress', { title: 'Heriot Watt - Tech Club' });
});*/

module.exports = router;
