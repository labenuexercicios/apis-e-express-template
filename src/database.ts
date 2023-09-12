import { COURSE_STACK, TCourse, TStudants } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

export const studants: TStudants[] = [
    {
    id: "01",
    name: "Fulano",
    age: 20,  
    },
    {
    id: "02",
    name: "Ciclano",
    age: 20,  
    },
    {
    id: "03",
    name: "Bertano",
    age: 20,  
    }

]