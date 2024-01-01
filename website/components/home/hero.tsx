import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';

const CountUp = dynamic(() => import('react-countup'), {
  loading: () => <span>70</span>,
  ssr: false,
});

export function Hero() {
  return (
    <div className="relative">
      <Blur />
      <Container>
        <div className="relative pt-20 md:pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-zinc-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Daniel Ponte
            </h1>
            <p className="mt-8 text-xl text-zinc-700 dark:text-zinc-300 leading-8">
              <span className="font-medium dark: dark:text-zinc-100">
                Advocacia e Consultoria Jurídica
              </span>{' '}
              feita com Dedicação e Zelo profissional.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                href="https://wa.me/558695886151"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-green-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Entre em contato!
                </span>
              </Link>
              <a
                href="/docs"
                target="_blank"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-zinc-600/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-zinc-700 dark:before:bg-zinc-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-zinc-700 dark:text-white">
                Conheça nossas publicações acadêmicas
                </span>
              </a>
            </div>
          </div>
        </div>
        <Companies />
      </Container>
    </div>
  );
}

export function Blur() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div className="fix-safari-blur blur-[106px] h-56 bg-gradient-to-br from-gray-500 to-gray-400 dark:from-white-700"></div>
      <div className="fix-safari-blur blur-[106px] h-32 bg-gradient-to-r from-gray-400 to-gray-300 dark:to-white-600"></div>
    </div>
  );
}

function Companies() {
  return (
    <div className="mt-36 text-center lg:mt-32 md:block hidden">
      <span className="uppercase text-sm font-semibold tracking-wider text-gray-800 dark:text-white">
      </span>
      <div className="mt-4 flex justify-around items-center">
        <div className="p-4 grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0">
          <a href="https://www.oab.org.br/" target="_blank">
            <OabLogo />
          </a>
        </div>
        <div className="p-4 grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0">
          <a
            href="https://www.tjpi.jus.br"
            target="_blank"
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <TjpiLogo />
          </a>
        </div>
        <div className="p-4 grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0">
          <a
            href="https://www.tjma.jus.br/"
            target="_blank"
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <TjmaLogo />
          </a>
        </div>
      </div>
    </div>
  );
}



function OabLogo() {
  return (
    <Image
      src="/oab.svg"
      alt='Oab'
      className="dark:white"
      width={50}
      height={33.13}
    />
  );
}
function TjpiLogo() {
  return (
    <Image
      src="/tjpi.svg"
      alt='Tjpi'
      className="dark:white"
      width={50}
      height={33.13}
    />
  );
}
function TjmaLogo() {
  return (
    <Image
      src="/tjma.svg"
      alt='Tjma'
      className="dark:white"
      width={50}
      height={33.13}
    />
  );
}

