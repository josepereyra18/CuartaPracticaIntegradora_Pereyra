import { Router } from "express";
import { getUsers, getUserById, createUser, userToAdmin, userDocuments} from "../../controllers/userController.js";
import { upload } from "../../utils.js";
const router = Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/premium/:id', userToAdmin);

router.post('/:id/documents', upload.single('document'), userDocuments);

export default router;

