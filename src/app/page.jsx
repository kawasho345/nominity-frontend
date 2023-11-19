"use client"
import { redirect } from "next/navigation";

//schedulesへリダイレクト
const page = () => {
    redirect("/schedules");
}

export default page