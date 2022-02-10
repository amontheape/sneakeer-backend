import { stripHtml } from "string-strip-html"

export default function dataSanitization(req, res, next) {
    let error = false

    Object.keys(req.body).forEach(param => {
        req.body[param] = stripHtml(req.body[param]).result.trim()
        req.body[param] === "" && (error = true)
    })

    error ? res.status(422).send('Undefined field') : next()
}