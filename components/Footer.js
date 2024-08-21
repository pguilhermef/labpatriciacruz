import Image from "next/image";
import Link from "next/link";

import whatsapp from "@/public/whatsapp.svg"
import instagram from "@/public/instagram.svg"
import mail from "@/public/mail.svg"
import telephone from "@/public/telephone.svg"
import clock from "@/public/clock.svg"


function Footer() {
  return (
    <footer className="flex bg-paty-cyan-opacity justify-center items-center">
      <div className="sm:h-46 sm:w-5/6 2xl:w-4/6 flex flex-col sm:flex-row items-center justify-center text-black">
        {/* Redes - OK */}
        <div className="sm:w-1/3 w-full h-full flex flex-col justify-evenly p-4 gap-y-2">
          <div className="text-lg lg:text-xl font-medium">
            Mais de 16 anos oferecendo qualidade, confiança e rapidez.
          </div>
          <div className="flex gap-x-4 h-12">
            {/* Whatsapp */}
            <Link href="https://wa.me/5521999719031" target="_blank" passHref>
              <div className="bg-paty-blue flex justify-center items-center shadow-md rounded-lg overflow-hidden w-12 h-12">
                <Image src={whatsapp} alt="Whatsapp" className="h-10 fill-slate-400" />
              </div>
            </Link>

            {/* Instagram */}
            <Link href="https://www.instagram.com/@labpatriciacruz" target="_blank" passHref>
              <div className="bg-paty-blue  flex justify-center items-center shadow-md rounded-lg overflow-hidden w-12 h-12">
                <Image src={instagram} alt="Instagram" className="h-10" />
              </div>
            </Link>
          </div>
        </div>
        {/* Contato - OK*/}
        <div className="sm:w-1/3 w-full h-full py-2 px-4">
          <div className="font-extrabold">
            <div className="text-2xl">Contato</div>
          </div>
          <div className="mt-3 font-medium">
            {/* Mail */}
            <div className="flex items-center gap-x-2">
              <Image src={mail} className="h-8 w-8 m-none"/>
              <div className="flex">
                labpatriciacruz@gmail.com
              </div>
            </div>
            {/* Telephone */}
            <div className="flex items-center gap-x-2">
              <Image src={telephone} className="h-8 w-8 m-none"/>
              <div className="flex">
              (21) 99971-9031
              </div>
            </div>
            {/* Clock */}
            <div className="flex items-center gap-x-2">
              <Image src={clock} className="h-8 w-8 m-none"/>
              <div className="flex">
              Seg à Sáb de 9:00 às 18:00
              </div>
            </div>
          </div>
        </div>
        {/* Logo Patrícia Cruz - OK */}
        <div className="sm:w-1/3 w-full h-full p-4 sm:order-2">
          <div className="h-full flex flex-col md:flex-row justify-start items-center font-serif text-5xl md:space-x-2">
            <span className="text-paty-blue">Patrícia</span><span className=" text-paty-cyan">Cruz</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
