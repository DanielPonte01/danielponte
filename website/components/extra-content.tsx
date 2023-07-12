import dynamic from 'next/dynamic';
import { startTransition, useEffect, useRef, useState } from 'react';
import GitHubButton from 'react-github-btn';

const LagRadar = dynamic(() => import('react-lag-radar'), { ssr: false });

export function ExtraContent() {
  return (
    <>
      <div className="flex justify-center">
        <GitHubButton
          href="https://github.com/DanielPonte01/danielponte"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-size="large"
          data-show-count="true"
          aria-label="Star aidenybai/million on GitHub"
        >
          Star
        </GitHubButton>
      </div>
      <Showdown />
    </>
  );
}

export function Showdown({ initStart = false, amount = 1000 }) {
  const [start, setStart] = useState<boolean>(false);
  const [renders, setRenders] = useState<number>(0);
  const firstUpdate = useRef(true);
  const ref = useRef<{
    renderReact: () => void;
    renderMillion: () => void;
  }>();

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const setup = async () => {
      const { block, mount, patch } = await import(
        './million-library/million.mjs'
      );
      const { createRoot } = await import('react-dom/client');

      const reactRoot = document.createElement('div');
      const millionRoot = document.createElement('div');

      const filledArray = Array(amount).fill(0);

      const b = block(({ text }: { text: string }) => ({
        type: 'div',
        props: {
          children: [
            {
              type: 'div',
              props: {
                children: [
                  ...filledArray.map(() => ({
                    type: 'div',
                    props: {
                      children: filledArray.map(() => ({
                        type: 'div',
                        props: {},
                      })),
                    },
                  })),
                  {
                    type: 'div',
                    props: {
                      children: [text],
                    },
                  },
                ],
              },
            },
          ],
        },
      }));

      const Component = ({ text }) => {
        return (
          <div>
            <div>
              {filledArray.map(() => (
                <div>
                  {filledArray.map(() => (
                    <div></div>
                  ))}
                </div>
              ))}
              <div>{text}</div>
            </div>
          </div>
        );
      };

      const currentBlock = b({ text: String(Math.random()) });
      mount(currentBlock, millionRoot);
      const root = createRoot(reactRoot);

      root.render(<Component text={String(Math.random())} />);

      ref.current = {
        renderReact() {
          root.render(<Component text={String(Math.random())} />);
        },
        renderMillion() {
          patch(currentBlock, b({ text: String(Math.random()) }));
        },
      };
    };
    if (initStart || start) {
      startTransition(() => {
        void setup();
      });
    }
  }, [start]);

  useEffect(() => {
    if (initStart) {
      setTimeout(() => {
        startTransition(() => {
          setStart(true);
        });
      }, 1000);
    }
  }, []);

  return (
    <div className="w-full border border-[#e5e7eb] dark:border-[#262626] bg-white dark:bg-[#141414] p-3 shadow rounded-lg">
      <div className="px-2 text-xs text-[#6b7280] font-semibold">
      </div>
      <hr className="border-[#e8e8e8] dark:border-[#4b4b4b] my-2" />
      {!start ? (
        <div>
        </div>
      ) : (
        <div>
          <div className="px-2 text-xs text-[#6b7280]">
            <span className="font-semibold">({renders} renders)</span>
          </div>
          <div className="flex justify-center my-4">
            <LagRadar />
          </div>
          <div className="flex gap-2 justify-center mb-4">
            <button
              onClick={() => {
                setRenders(renders + 1);
                ref.current?.renderMillion();
              }}
              className="bg-[#b073d9] gradient-bg transition-all active:scale-105 hover:opacity-90 active:opacity-90 font-bold text-white py-2 px-4 rounded-full shadow"
            >
            </button>
            <button
              onClick={() => {
                setRenders(renders + 1);
                ref.current?.renderReact();
              }}
              className="bg-[#139eca] transition-all active:scale-105 hover:opacity-90 active:opacity-90 text-white py-2 px-4 rounded-full shadow"
            >
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <div className="mt-2 text-xs text-[#6b7280]">
          <a
            target="_blank"
            href="https://github.com/aidenybai/million/blob/188febf41af66a1af12064bdee943e0d680bd09e/website/components/extra-content.tsx#L15"
          >
            <u></u>
          </a>
        </div>
      </div>
    </div>
  );
}
