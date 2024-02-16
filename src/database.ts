import { COURSE_STACK, TCourse, TStudent } from "./types"

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

export const students: TStudent[] = [
    {
        id: '001',
        name: 'Luís Felipe',
        age: 28
    },

    {
        id:'002',
        name: 'Zenilda Crispim',
        age: 63
    },

    {
        id: '003',
        name: 'Rafaela Pinheiro',
        age: 30
    }
]
