import express, { Request, Response } from 'express'
import cors from 'cors'
import { TCourse, TStudants } from './types'
import { courses, studants } from './database'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})


app.get('/courses', (req: Request, res: Response) => {
    const result: TCourse[] = courses
    res.status(200).send(result)
})

app.get('/courses/search',(req: Request, res: Response) => {
    const query: string = req.query.q as string;

    const coursesByName: TCourse[] = courses.filter(course => course.name.toLowerCase() === query.toLowerCase()) 
    res.status(200).send(coursesByName)
})


app.post('/courses',(req: Request, res: Response) => {
    const { id, name, lessons, stack }: TCourse = req.body
    const newCourse: TCourse = {
        id,
        name,
        lessons,
        stack
    }
    courses.push(newCourse)
    res.status(201).send(`O Curso ${name} foi registrado com sucesso!`)
})


////// Prática guiada (exercício) 

// Get All Studants

app.get('/studants', (req: Request, res: Response) => {
    const result: TStudants[] = studants
    res.status(200).send(result)
})

// Get studant by name 

app.get('/studants/search',(req: Request, res: Response) => {
    const query: string = req.query.q as string;

    const studantsByName: TStudants[] = studants.filter(studant => studant.name.toLowerCase() === query.toLowerCase()) 
    res.status(200).send(studantsByName)
})

// Create studant 

app.post('/studants',(req: Request, res: Response) => {
    const { id, name, age }: TStudants = req.body
    const newStudant: TStudants = { id, name, age }
    studants.push(newStudant)
    res.status(201).send(`O Estudante ${name} foi registrado com sucesso!`)
})
