import express from 'express';
import Formcontroller from '../controllers/formcontroller.js';
import checkIsUserAuthenticated from '../middleware/authmiddleware.js';
const router = express.Router()

router.post('/signup',Formcontroller.signup)
router.post('/login',Formcontroller.login)
router.post('/check',checkIsUserAuthenticated,Formcontroller.Check)
// router.get('/getuser',Formcontroller.getForm)
// router.delete('/deleteuser/:id',Formcontroller.deleteForm)
// router.put('/updateuser/:id',Formcontroller.updateForm)

export default router