import express, { Request, Response } from 'express'
import cors from 'cors'
import { TCourse, TStudent } from './types'
import { courses, students } from './database'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get('/courses', (req:Request, res:Response)=>{
    const result: TCourse[] = courses;
    res.status(200).send(result);
});

app.get('/courses/search', (req:Request, res:Response)=>{
    const query: string = req.query.q as string;

    const coursesByName: TCourse[] = courses.filter(course => course.name.toLowerCase() === query.toLocaleLowerCase());

    res.status(200).send(coursesByName);
});

app.post ('/courses', (req:Request, res:Response)=>{
    //1° forma de fazer = um pouco longa:
    // const id: string = req.body.id; //denominei o nome da variável igual a que quero receber = id
    // const name: string = req.body.name;
    // const lessons: number = req.body.lessons;
    // const stack: string = req.body.stack;
    const {id, name, lessons, stack}: TCourse = req.body; // 2° forma, mas simples
    const newCourse: TCourse = {
        id,
        name,
        lessons,
        stack
    }
    //Inserindo essa variável dentro do array
    courses.push(newCourse);

    res.status(201).send ('Curso registrado com sucesso');
});
//---------

app.get ('/students', (req:Request, res:Response)=>{
    const result : TStudent[] = students;

    res.status (200).send(result);
});

app.get ('/students/search', (req:Request, res:Response)=>{
    const query: string = req.query.q as string;

    const studentsByName : TStudent[]= students.filter(student=> student.name.toLocaleLowerCase() === query.toLocaleLowerCase());

    res.status(200).send(studentsByName)
})

app.post ('/students', (req:Request, res:Response)=>{

    const {id, name,age}: TStudent = req.body; // 2° forma, mas simples
    const newStudent: TStudent = {
        id,
        name,
        age
    }
    //Inserindo essa variável dentro do array
    students.push(newStudent);

    res.status(201).send ('Estudante registrado com sucesso');
});