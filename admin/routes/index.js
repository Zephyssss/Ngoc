var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard 1' });
});

router.get('/index2', function(req, res, next) {
  res.render('index2', { title: 'Dashboard 2' });
});

router.get('/index3', function(req, res, next) {
  res.render('index3', { title: 'Dashboard 3' });
});

router.get('/productlist', function(req, res, next) {
  res.render('productlist', { title: 'Product List' });
});

router.get('/productedit', function(req, res, next) {
  res.render('productedit', { title: 'Product Edit' });
});

router.get('/productdetail', function(req, res, next) {
  res.render('productdetail', { title: 'Product Detail' });
});

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Product Cart' });
});

router.get('/payment', function(req, res, next) {
  res.render('payment', { title: 'Payment' });
});

router.get('/analytics', function(req, res, next) {
  res.render('analytics', { title: 'Analytics' });
});

router.get('/manageuser', function(req, res, next) {
  res.render('manageuser', { title: 'User' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Profile' });
});
/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
