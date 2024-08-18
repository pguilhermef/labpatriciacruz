import Image from "next/image";
import Link from "next/link";

import whatsapp from "@/public/whatsapp.svg"
import instagram from "@/public/instagram.svg"

function Footer() {
  return (
    <footer className="bg-cyan-500 sm:h-44 flex flex-col sm:flex-row  items-center justify-center text-black">
      {/* Redes - OK */}
      <div className="sm:w-1/3 w-full h-full flex flex-col justify-evenly p-4 gap-y-2">
        <div className="text-lg lg:text-xl font-medium">
          Mais de 16 anos oferecendo qualidade, confiança e rapidez.
        </div>
        <div className="flex gap-x-4">
          {/* Whatsapp */}
          <Link href="https://wa.me/5521970181833" target="_blank" passHref>
            <div className="bg-indigo-950 flex justify-center items-center shadow-md rounded-lg overflow-hidden w-14 h-14">
              <Image src={whatsapp} alt="Whatsapp" className="h-10 fill-slate-400" />
            </div>
          </Link>

          {/* Instagram */}
          <Link href="https://www.instagram.com/@labpatriciacruz" target="_blank" passHref>
            <div className="bg-white flex justify-center items-center shadow-md rounded-lg overflow-hidden w-14 h-14">
              <Image src={instagram} alt="Instagram" className="h-10" />
            </div>
          </Link>
        </div>
      </div>
      {/* Contato */}
      <div className="sm:w-1/3 w-full h-full p-1 bg-slate-600">
        <div>
          <div className="text-2xl">Contato</div>
        </div>
        <div>
          <div>
            teste@gmail.com
          </div>
          <div>
            (21) 99971-9031
          </div>
          <div>
            Seg à Sáb de 9:00 às 18:00
          </div>
        </div>
      </div>
      {/* Logo Patrícia Cruz */}
      <div className="sm:w-1/3 w-full h-full p-1 bg-slate-500 sm:order-2">
        <div className="h-full flex flex-col md:flex-row justify-center items-center font-serif text-5xl md:space-x-2">
          <span>Patrícia</span><span>Cruz</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
