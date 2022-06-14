const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
    }),

app.get('/users', (req, res) => {
        res.send(["user1", "user2", "user3"])
        }),

    
 app.post('/users', (req, res) => {
            res.send(" Юзер добавлен")
            }),

app.delete('/usere/:id', (req, res) => {
                res.send(`юзер с ID : ${req.params.id} удален`)
                }),

app.patch('/usere/:id', (req, res) => {
                    res.send(`юзер с ID : ${req.params.id} изменен`)
                    }),

app.patch('/admin', (req, res) => {
                        res.send(`Не хватает доступа`)
                        }),

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
