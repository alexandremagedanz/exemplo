const personApi = require('../api/person')

const express = require('express')

const router = express.Router();

router.get('/', personApi.findAll)
router.get('/:id', personApi.findById)
router.post('/', personApi.createPerson)
router.put('/:id', personApi.updadePerson)
router.delete('/:id', personApi.deletePerson)

module.exports = router;