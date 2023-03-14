const express = require('express');
const router = express.Router();
const buckleupController=require('../controllers/buckleupController');
// trades.html
router.get('/', buckleupController.index);
//newtrade.html
router.get('/new',buckleupController.new);
//posting data collected from newtrade.html
router.post('/',buckleupController.create);
// GET /trades/:id -- sends details of particular item
router.get('/:id', buckleupController.show);

// Update - /trades/:id/:edit 
router.get('/:id/edit', buckleupController.edit);

// update the story identify by id
router.put('/:id',buckleupController.update);
//delete an item from the list
router.delete('/:id',buckleupController.delete);
router.get('/about', buckleupController.aboutpage);
router.get('/contact', buckleupController.contactpage);
module.exports = router;
