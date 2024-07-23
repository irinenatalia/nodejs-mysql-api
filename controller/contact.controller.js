const pool = require("../database/index")
const contactController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from contact")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const { name, email, subject, message } = req.body
            console.log(req.body)
            const sql = "insert into contact (name, email, subject, message) values (?, ?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [name, email, subject, message])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                error: error,
                status: "error"
            })
        }
    }

}

module.exports = contactController