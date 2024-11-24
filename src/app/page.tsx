// import Image from "next/image";
import { redirect } from "next/navigation";
import "./globals.css";


export default function Home() {
  redirect('/product')
  return <div></div>;
}
