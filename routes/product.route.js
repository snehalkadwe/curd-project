const router = require('express').Router();
const productController = require('../controllers/ProductController.js');

router.get('/test', productController.test);

router.get('/', productController.index);
router.get('/add', productController.create)
router.post('/create', productController.save);
// load edit page
router.get('/edit/:id', productController.edit);
router.post('/update/:id', productController.update);

module.exports = router;