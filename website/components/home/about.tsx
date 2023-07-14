import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Container } from './container';

const Chart = dynamic(() => import('../chart').then((mod) => mod.Chart));
const Showdown = dynamic(() =>
  import('../extra-content').then((mod) => mod.Showdown),
);

export function About() {
  return (
    <>
      <div>
        <Container>
          <div className="lg:p-16 space-y-6 md:flex md:gap-20 justify-center md:space-y-0 lg:items-center">
            <div className="md:w-7/12 lg:w-1/2">
              <Graphic />
            </div>
            <div className="md:w-7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white">
              Quem sou
              </h2>
              <p className="text-lg justify-center my-8 text-zinc-600 dark:text-zinc-300">
              Daniel Ponte, advogado (OAB 21.452/PI) e escritor, pós-graduado em Direito Penal e Segurança pública pelo Centro de Ensino Superior de São Gotardo - MG.
              </p>
              <div className="divide-y space-y-4 divide-zinc-100 dark:divide-zinc-800">
                <div className="mt-8 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-zinc-100 dark:bg-zinc-600/20">
                    <ClockIcon />
                  </div>
                  <div className="w-5/6">
                        <h4 className="font-semibold text-lg text-zinc-700 dark:text-gray-100">
                      Dedicação Integral a sua causa.
                    </h4>
                  </div>
                </div>
                <div className="pt-4 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-zinc-100 dark:bg-zinc-600/20">
                    <LightningIcon />
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-zinc-700 dark:text-gray-100">
                    Outras informações
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                    Para uma visão completa de minhas qualificaçoes e atividades{' '}
                    <a
                         href="/readme"
                         target="_blank"
                         rel="noreferrer"
                         className="text-zinc-500 underline decoration-from-font [text-underline-position:from-font]"
                    >
                    clique aqui.
                    </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 text-xs dark:text-zinc-300 text-zinc-600 opacity-50 hover:opacity-90 transition-opacity">
                Nota:  As informações presentes são atualizadas constantemente.
                </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <h3 className="text-2xl text-center font-bold text-zinc-900 dark:text-white md:text-3xl lg:text-4xl">
            Nossa atuação
          </h3>
          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Elaboração de Parecer Jurídico"
              icon={<BoxIcon />}
              description={
                <>
                  Oferecemos serviços especializados na elaboração de pareceres jurídicos. Com analise cuidadosa dos aspectos legais de questões complexas, fornecemos análises objetivas e fundamentadas, em uma abordagem meticulosa, considerando todas as informações relevantes e jurisprudências aplicáveis para fornecer orientações sólidas aos nossos clientes. Conte conosco para obter pareceres jurídicos confiáveis e de qualidade, embasados em uma profunda compreensão do direito e suas aplicações.
                </>
              }
            />
            <Card
              title="Atuação em Processos Judiciais"
              icon={<LightBulbIcon />}
              description={
                <>
                Estamos preparados para representar nossos clientes em todas as etapas do litígio, desde a análise inicial até a resolução final. Com dedicação e compromisso, buscamos os melhores resultados para nossos clientes, apresentando estratégias eficazes, argumentos sólidos e defesa incansável de seus interesses. Seja em demandas cíveis, criminais ou outras áreas do direito, confie em nossa qualidade técnica para uma representação jurídica competente e focada em seus objetivos.
                </>
              }
            />
            <Card
              title="Atuação em Processos Administrativos e Licitações"
              icon={<ThumbsUpIcon />}
              description={
                <>
                Oferecemos serviços de assessoria e atuação em processos administrativos e licitações. Compreendemos a complexidade dessas áreas e estamos preparados para auxiliar empresas e particulares em todos os aspectos legais envolvidos. Possuímos amplo conhecimento das normas e regulamentos aplicáveis, bem como das melhores estratégias para alcançar resultados favoráveis. Desde a fase inicial de preparação até a defesa de direitos e interesses durante o processo, estamos prontos para oferecer a assistência necessária para uma participação efetiva e bem-sucedida em processos administrativos e licitações.
                </>
              }
            />
          </div>
        </Container>
      </div>
    </>
  );
}

function Graphic() {
  const [showShowdown, setShowShowdown] = useState(false);

  const handleClick = () => {
    setShowShowdown(!showShowdown);
  };

  return (
    <GraphicWrapper imageSrc="./default-og.png" onClick={handleClick}>
      {!showShowdown ? (
        <div className="bg-white p-4 pb-6 font-bold dark:bg-zinc-900 rounded-lg">
        <p>Daniel Ponte</p>
          <div className="w-full">

          </div>
          <div className="text-sm text-zinc-400">
            OAB/PI n°{' '}
            <a
              href="https://cna.oab.org.br/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 underline decoration-from-font [text-underline-position:from-font]"
            >
            21.452
            </a>{' '}
          </div>
        </div>
      ) : (
        <Showdown initStart amount={500} />
      )}
    </GraphicWrapper>
  );
}

function GraphicWrapper({
  children,
  onClick,
  imageSrc,
}: {
  children: JSX.Element;
  onClick: () => void;
  imageSrc: string;
}) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={10}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt shadow-lg w-full
rounded-lg text-center bg-gradient-to-b from-zinc-200 to-white dark:from-zinc-700 dark:via-zinc-800 dark:to-darker p-px"
    >
      <div className="absolute z-50 flex p-2 justify-end w-full">
        <button onClick={onClick}>
        </button>
      </div>
      <img src={imageSrc} alt="Imagem" />
      {children}
    </Tilt>
  );
}

function Card({ title, description, icon }) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-200 to-white p-px dark:from-zinc-700 dark:via-zinc-800 dark:to-darker"
    >
      <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900">
        {icon}
        <div>
          <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {title}
          </h4>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
      </div>
    </Tilt>
  );
}

function ThumbsUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-zinc-800 hover:animate-spin dark:text-gray-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
      />
    </svg>
  );
}

function LightBulbIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-zinc-800 hover:animate-spin dark:text-gray-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 text-zinc-800 hover:animate-spin dark:text-gray-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-zinc-800 m-auto hover:animate-spin dark:text-gray-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 m-auto text-zinc-800 dark:text-gray-100 hover:animate-spin"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
