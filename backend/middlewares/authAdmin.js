import jwt from 'jsonwebtoken'


// Admin authentication middleware
const authAdmin = async (req,res,next) =>{
    try {
        const {authToken} = req.headers
        if (!authToken) {
            return res.status(400).json({ success: false, message: "Not Authorized Login Again" });
        }

        const token_decode = jwt.verify(authToken,process.env.JWT_SECRET)

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(400).json({ success: false, message: "Not Authorized Login Again" });
        }

        next()

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export default authAdmin