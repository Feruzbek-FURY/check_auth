import { all } from "../dbhelper.js"

export const getBooks = async (req, res) => {
    
    const sql = 'SELECT * FROM books;'
    
    const rows = await all(sql)

    res.status(200).json({
        message: "All books for user " + res.locals.user.name,
        books: rows
    })
}