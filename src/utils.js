import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from "multer";
import path from "path";
import fs from "fs";

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (user,password) => bcrypt.compareSync(password, user.password);

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return null;
    }
};

export const generateToken = (email) => {
    const payload = { email };
    const secret = process.env.SECRET_KEY;
    const options = { expiresIn: '1h' };

    return jwt.sign(payload, secret, options);
};

export default __dirname;


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let { id } = req.params // Asumiendo que el ID del usuario está disponible en req.user
        const userDir = path.join(__dirname, 'documents', id.toString());
    
        // Crear la carpeta si no existe
        if (!fs.existsSync(userDir)) {
            fs.mkdirSync(userDir, { recursive: true });
        }
    
        cb(null, userDir);
        },
        filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo
        }
})

export const upload = multer({ storage: storage });


