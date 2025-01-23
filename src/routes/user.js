const userApi = require('../api/user')

const express = require('express')

const router = express.Router();

router.get('/', userApi.findAll)
router.get('/:id', userApi.findById)
router.post('/', userApi.createUser)
router.put('/:id', userApi.updadeUser)
router.delete('/:id', userApi.deleteUser)

module.exports = router;