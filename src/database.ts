import { COURSE_STACK, TCourse, TEstudent } from "./types"

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

export const estudents: TEstudent[] = [
    {
        id: "est001",
        name: "Luiz Paulo",
        age: 36
    },
    {
        id: "est002",
        name: "Thalita",
        age: 29
    }]