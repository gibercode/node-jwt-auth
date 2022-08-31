import User from '../models/user'
import jwt from 'jsonwebtoken'
import { secret_key } from '../constants'
import bcrypt from 'bcryptjs'

const register = async (req, res, next) => {
	try {
		const user = new User(req.body)
		const hashedPass = await bcrypt.hash(user.password, 10)
		user['password'] = hashedPass

		await user.save()
		res.json(user);

	} catch (error) {
		res.status(500).json({ error: "something went wrong" })
	}
}

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body
		if (!email || !password) return res.status(400).json({ error: "All fields are required" })

		const user = await User.findOne({ email })
		const passwordMatches = await bcrypt.compare(password, user.password)

		if (user && passwordMatches) {
			const token = jwt.sign({ user_id: user._id, email }, secret_key)

			const response = {
				...user._doc,
				token
			}
			return res.status(200).json(response);
		}

		res.status(400).json({ error: "bad request" })

	} catch (error) {
		res.status(500).json({ error: "server error" })
	}
}

export { register, login };