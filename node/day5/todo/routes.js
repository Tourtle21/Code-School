var express = require('express')
var router = express.Router()
var controller = require('./controller')
var passport = require('passport')

router.use(passport.authenticate('basic', { session: false})) 

router.get('/', controller.index)
router.post('/', controller.create)
router.get('/:id', controller.show)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router;