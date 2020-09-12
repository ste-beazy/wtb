const express = require('express')
const { urlencoded, json, Router } = require('express')
const { createTransport } = require('nodemailer')

const postOffice = createTransport({
	service: 'Gmail'
})

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

const asyncHandler = (req, res, next, err) => new Promise((resolve, reject) => {
	resolve(req, res)
	if (err) {
		next(err)
	}
})

const router = Router({
	strict: true
})

router.post('/subscribe', asyncHandler, async (req, res) => {
	const { email = 'sbrown3234@gmail.com' } = req.body
	if (!email) {
		return res.status(400).send({ error: 'email' })
	}

	console.log('in it', { email })
	
	await postOffice.sendMail({
		from: 'no-replay@whats-the-biz.com',
		sender: "What's the Biz?",
		to: email,
		text: 'Bleep bloop bloop'
	}).catch(err => console.log({ err }))

	res.send(201)
})

app.use(router)
app.listen(3000)

