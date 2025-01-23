const userApi = require('../api/user')

const express = require('express')

const router = express.Router();

router.get('/', userApi.findAll)
router.get('/:index', userApi.findByIndex)
router.post('/', userApi.createUser)
router.put('/:index', userApi.updadeUser)
router.delete('/:index', userApi.deleteUser)

module.exports = router;