import express, { Request, Response } from 'express'
import cors from 'cors'

import{courses, estudents} from './database'
import { COURSE_STACK, TCourse, TEstudent } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get('/courses', (req: Request, res: Response)=>{
    res.status(200).send(courses)
})

app.get('/courses/search', (req:Request,res:Response)=>{
    const q = req.query.q as string

    const result = courses.filter((course)=>{
        return course.name.toLowerCase().includes(q.toLowerCase())
    })

    res.status(200).send(result)
})

// Criação de curso - Terceiro endpoint
app.post('/courses', (req:Request, res: Response)=>{

    // const iq = req.body.id as string
    // const name = req.body.name as string
    // const lessons = req.body.lessons as number
    // const stack = req.body.stack as COURSE_STACK

    const {id,name,lessons,stack} = req.body as TCourse



    const newCourse = {
        id: id,
        name: name,
        lessons: lessons,
        stack: stack
    }

    courses.push(newCourse)

    res.status(201).send('Curso registrado com sucesso')

})

// Estudantes

app.get('/estudents', (req: Request, res: Response)=>{
    res.status(200).send(estudents)
})

app.get('/estudents/search', (req:Request,res:Response)=>{
    const q = req.query.q as string

    const result = estudents.filter((estudent)=>{
        return estudent.name.toLowerCase().includes(q.toLowerCase())
    })

    res.status(200).send(result)
})

app.post('/estudents', (req:Request, res: Response)=>{

    // const iq = req.body.id as string
    // const name = req.body.name as string
    // const lessons = req.body.lessons as number
    // const stack = req.body.stack as COURSE_STACK

    const {id,name,age} = req.body as TEstudent



    const newEstudent = {
        id: id,
        name: name,
        age: age
    }

    estudents.push(newEstudent)

    res.status(201).send('Estudante registrado com sucesso')

})
