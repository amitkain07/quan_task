import express from 'express'
import {getAllUsers , deleteAllUsers} from '../controllers/getall.js'

const router = express.Router()

router.route('/api/getall').get(getAllUsers);
router.route('/api/delete').delete(deleteAllUsers);


export default router