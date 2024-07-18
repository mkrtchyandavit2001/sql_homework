"use client"

import { ICourse } from "@/app/lib/api"
import Image from "next/image"

interface Props{
    courses: ICourse
}

export default function Details ({courses}:Props){
    return<>
        <Image src = {courses.cover} alt = "Courses photo"/>
        <p>{courses.name}</p>
        <p>{courses.price}</p>
        <p>{courses.price}</p>
    </>
}