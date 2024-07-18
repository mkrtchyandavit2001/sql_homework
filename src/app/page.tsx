import Image from "next/image";
import styles from "./page.module.css";
import { getAllCourses } from "./lib/api";
import Course from "./courses/page";

export default function Home() {
  const courses = getAllCourses()

  return (
    <main className={styles.main}>
      {
        courses.map(course => <Course key = {course.id} courses = {course}/>)
      }
      </main>
  );
}
