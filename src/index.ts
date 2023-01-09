import { courses, students } from './database';
//IMPORTAÇÃO DO EXPRESS E DOS OBJETOS REQUEST E RESPONSE
import express, {Request, Response} from 'express'

//IMPORT DO CORS
import cors from 'cors'
import { TCourse, TStudent } from './types';

//CRIAÇÃO DO SERVIDOR EXPRESS
const app = express()

//Garantir que as respostas sempre sejam em JSON
app.use(express.json());

//Habilita o uso do cors
app.use(cors())

//colocando nosso servidor para escutar a porta 3003 da nossa máquina (primeiro 
//parâmetro da função listen)
//a função de callback (segundo parâmetro da função listen) serve para sabermos 
//que o servidor está de pé, através do console.log que imprimirá a mensagem no 
//terminal 👇🏽

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

//Criando um endpoint de teste
app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
  });

app.get('/courses', (req: Request, res: Response) => {
    res.status(200).send(courses)
});  

//REQUISIÇÃO GET COM QUERY
app.get("/courses/search/", (req: Request, res: Response)=>{
    const q = req.query.q as string //Forçar a info ser uma string

    const coursesFilter = courses.filter((course)=>{
        return course.name.toLowerCase().includes(q.toLowerCase())
    })
    res.status(200).send(coursesFilter)
})

//REQUISIÇÃO POST COM BODY
app.post("/courses", (req: Request, res: Response)=>{
    const id = req.body.id
    const name = req.body.name
    const lessons = req.body.lessons
    const stack = req.body.stack;

    const newCourse:TCourse = {
        id: id,
        name: name,
        lessons: lessons,
        stack: stack
    }

    //PODE SER ASSIM TAMBÉM:

    // const newCourse = {
    //     id
    //     name
    //     lessons
    //     stack
    // }

    courses.push(newCourse);

    res.status(200).send('Curso registrado com sucesso!')
})

app.get("/students", (req: Request, res: Response)=>{
    res.status(200).send(students)
})

app.post("/students", (req: Request, res: Response)=>{

    const id = req.body.id
    const name = req.body.name
    const age = req.body.age

    const newStudent:TStudent = {
        id,
        name,
        age
    }

    students.push(newStudent)

    res.status(200).send("Estudante registrado com sucesso")
})