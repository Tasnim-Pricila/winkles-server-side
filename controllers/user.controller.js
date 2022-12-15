const { signupService, findUserByEmail } = require("../services/user.services");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res, next) => {
    try {
        const result = await signupService(req.body);
        res.status(200).send({
            status: "success",
            message: "Successfully Signed Up",
            data: result
        })
    } catch (error) {
        let err;
        if (error.code == 11000) {
            err = 'This Email is already registered'
        }
        res.status(400).send({
            status: "fail",
            message: " Signed Up failed",
            error: err ? err : error.message
        })
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if( !email || !password){
            return res.status(400).send({
                status: "fail",
                error: "Email or password field is empty",
            })
        }
        const user = await findUserByEmail(email);
        if(!user){
            return res.status(400).send({
                status: "fail",
                error: "This email doesn't exist. Please create an account first",
            })
        }
        // const isPasswordvalid = user.comparePassword(password, user.password);

        if(password !== user.password){
            return res.status(400).send({
                status: "fail",
                error: "Password is wrong",
            })
        }
        if(user.status !== "active"){
            return res.status(400).send({
                status: "fail",
                error: "Your account is not active",
            })
        }

        const token = generateToken(user);
        const { password: pwd, ...others } = user.toObject();

        res.status(200).send({
            status: "success",
            message: "Successfully Signed In",
            data: {
                others,
                token
            }
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: " Signed Up failed",
            error: error.message
        })
    }
}

exports.getMe = async (req, res) => {
    try {
        const user = await findUserByEmail(req.user?.email);
        res.status(200).send({
            status: "success",
            message: "Successfully Signed In",
            data: user
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            error: error.message
        })
    }
}