import Image from "next/image";
import Link from "next/link";

import telephone from "@/public/telephone.svg"
import instagram from "@/public/instagram.svg"

function Principal() {
  return (
    <section className="text-white min-h-screen md:min-h-0 md:py-20 flex items-start justify-center bg-paty-cyan-opacity">
      {/* Infos */}
      <div className="w-full xl:w-5/6 px-4 flex md:gap-x-8 md:justify-between">
        <div className="w-full md:w-4/6 flex flex-col justify-center items-center md:items-start gap-y-5 m-0 p-2">
          <div className="text-3xl xl:text-5xl font-extrabold">
            <span className="text-paty-blue">
              O <span className="text-paty-cyan">sorriso</span> dos seus pacientes começa aqui.</span>
          </div>
          <div className="w-80 h-80 flex justify-center items-center bg-paty-cyan mt-2 rounded-[20%] md:hidden">
            <div>
              IMAGEM
            </div>
          </div>
          <div className="text-black md:text-lg font-semibold text-justify">
            <span>
              Combinamos tecnologia de ponta e profissionais
              com alta habilidade manual para criar próteses
              dentárias que não apenas satisfazem as
              expectativas dos seus pacientes, mas também
              elevam a qualidade do seu trabalho.
            </span>
          </div>
          <div>
            <div className="pt-2 lg:pt-4 pb-4 lg:pb-6  text-paty-cyan font-bold md:text-lg">
              <span className="p-4 lg:p-6 bg-paty-blue rounded-xl ">ENTRE EM CONTATO</span>
            </div>
          </div>
          <div className="flex text-paty-blue font-extrabold gap-x-4 min-h-12 w-full">
            {/* Telefone */}
            <div className="flex gap-x-3">
              <Link href="https://wa.me/5521999719031" target="_blank" passHref>
                <div className="bg-paty-blue flex justify-center items-center shadow-md rounded-lg overflow-hidden w-10 h-10 md:w-12 md:h-12">
                  <Image src={telephone} alt="Whatsapp" className="h-8 md:h-10 fill-slate-400" />
                </div>
              </Link>
              <div className="flex flex-col text-sm">
                <span>Número:</span>
                <span className="text-xs mt-1">(21) 96971-9031</span>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex gap-x-3">
              <Link href="https://www.instagram.com/@labpatriciacruz" target="_blank" passHref>
                <div className="bg-paty-blue  flex justify-center items-center shadow-md rounded-lg overflow-hidden w-10 h-10 md:w-12 md:h-12">
                  <Image src={instagram} alt="Instagram" className="h-8 md:h-10" />
                </div>
              </Link>
              <div className="flex flex-col text-sm">
                <span>Instagram:</span>
                <span>@labpatriciacruz</span>
              </div>
            </div>
          </div>
        </div>
        {/* Imagem */}
        <div className="hidden md:flex justify-center items-start">
          <div className="w-96 h-96 flex justify-center items-center bg-paty-cyan mt-2 rounded-[20%]">
              <div>
                IMAGEM
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Principal;
