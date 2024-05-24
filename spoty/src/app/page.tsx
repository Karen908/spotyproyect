import Image from "next/image";
import Registro from "./registro/components/Registro";
import Vista_admin from "../app/View_Admin/components/Vista_admin";

export default function Home() {
  return (
   <div>
    <Registro/>
    <Vista_admin/>

   </div>
  );
}
