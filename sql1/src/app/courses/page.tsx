"use client"

import Image from "next/image"
import { ICourse } from "../lib/api"
import { NavLink } from "../lib/components/nav-link"

interface Props{
    courses: ICourse
}

export default function Course ({courses}:Props){
    return<>
        <Image src = {courses.cover} alt = "Courses photo"/>
        <p>{courses.name}</p>
        <NavLink href="/details">Details</NavLink>
        <NavLink href="/edit">Edit</NavLink>
    </>
}