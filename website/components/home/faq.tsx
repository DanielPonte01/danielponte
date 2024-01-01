import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
import { Container } from './container';

const faq = [
  {
    question: <>Como entrar em contato?</>,
    answer: (
      <>
      <p>
      Para entrar em contato fique a vontade para encaminhar um email para: {' '}
        <a
          href="mailto:contato@danielponte.com.br"
          target="_blank"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font text-zinc-900 dark:text-white [text-underline-position:from-font]"
        >
          contato@danielponte.com
        </a>
      </p>
      <div></div>
      Ou pelo {' '}
        <a
          href="https://wa.me/558695886151"
          target="_blank"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font text-zinc-900 dark:text-white [text-underline-position:from-font]"
        >
      WhatsApp
      </a>
      </>
    ),
  },
  {
    question: (
      <>
      Como é realizada a consulta?
      </>
    ),
    answer: (
      <>
        A consulta jurídica poderá ser realizada presencialmente ou pela internet conforme preferência do cliente. Caso opte pela teleconferência, utilizaremos o {' '}
        <a
          href="https://meet.jit.si/"
          target="_blank"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
        Jitsi Meet
        </a>
        {' '} para garantir a privacidade e sigilo da camunicação. Jitsi Meet não necessita ser instalado, basta acessar o link encaminhado.
      </>
    ),
  },
  {
    question: <> Qual o valor? </>,
    answer: (
      <>
      Os valores serão definidos conforme a complexidade da causa e tempo de atuação.
      </>
    ),
  },
  {
    question: <>Quais as formas de pagamento?</>,
    answer: (
      <>
      Aceitamos todas as formas de pagamento.
      <div></div>
      Haverá um desconto caso seja realizada via PIX ou por criptomoedas.
      As criptomoedas aceitas são: Monero (XMR) e Bitcoin (BTC).
      </>
    ),
  },
  {
    question: <>Posso utilizar os textos que estão disponibilizados?</>,
    answer: (
      <>
      Os escritos disponibilizados estão sob a licença Creative Commons Attribution 4.0 International (CC BY 4.0). Significa que você esta livre para compartilhar e adaptar os escritos desde que forneça a referência do texto e aturo, assim como indique as mudanças que realize. {' '}
        <a
          href="https://creativecommons.org/licenses/by/4.0/deed.pt_BR"
          target="_blank"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
        Clique aqui para acessar a licença.
        </a>
      </>
    ),
  }
];

export function FAQ() {
  return (
    <div className="mt-32" id="faq">
      <Container>
        <div className="mt-32 flex flex-col gap-12 lg:flex-row">
          <div className="text-center lg:w-5/12 lg:pl-12 lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl">
             Perguntas frequentes
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
            Caso tenha outras dúvidas entre em contato. Será atendido o quanto antes.
            </p>
          </div>
          <div className="lg:w-7/12">
            <Disclosures />
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Disclosures({ full = false }) {
  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
      {faq.map((item, i) => (
        <Disclosure
          as="div"
          key={String(i)}
          className={`mx-auto text-lg ${full ? '' : 'max-w-2xl'}`}
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-start justify-between py-6 text-left text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className={`arrow-down h-6 w-6 transform duration-300 ${
                      open ? 'rotate-180' : 'rotate-0'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  className={`pr-12 duration-300 ease-in-out ${
                    open ? '' : 'hidden'
                  }`}
                >
                  <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
