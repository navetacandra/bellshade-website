import { ReactElement } from "react";
import LineCode from "./LineCode";

interface SyntaxHighlighterProps {
  // eslint-disable-next-line react/require-default-props
  code?: string[];
}

function ClipboardCopier() {
  function copyToClipboard(
    textToCopy: string,
    resolve: Function,
    reject: Function,
  ) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
      // navigator clipboard api method'
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => resolve())
        .catch(() => reject());
    } else {
      // text area method
      const textArea = document?.createElement("textarea");
      textArea.value = textToCopy;
      // make the textarea out of viewport
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const cb = () =>
        new Promise(() => {
          // eslint-disable-next-line no-unused-expressions
          document.execCommand("copy") ? resolve() : reject();
          textArea.remove();
        });
      cb();
    }
  }

  function handleClick(el: HTMLElement) {
    const parent = el.parentElement;
    const btn = parent?.querySelector("button");
    const codeText = parent?.querySelector("pre")?.innerText || "";
    copyToClipboard(
      codeText,
      () => {
        btn?.classList.remove("text-slate-50");
        btn?.classList.add("text-green-500");
        setTimeout(() => {
          btn?.classList.remove("text-green-500");
          btn?.classList.add("text-slate-50");
        }, 2000);
      },
      () => {
        btn?.classList.remove("text-slate-50");
        btn?.classList.add("text-red-500");
        setTimeout(() => {
          btn?.classList.remove("text-red-500");
          btn?.classList.add("text-slate-50");
        }, 2000);
      },
    );
    // alert(navigator.clipboard)
  }
  return (
    <button
      className='button absolute top-0.5 right-2 lg:top-2 lg:right-6 opacity-80 hover:opacity-100'
      style={{
        color: "#abb2bf",
      }}
      onClick={(el: any) => handleClick(el.target)}
      type='button'
    >
      Copy
    </button>
  );
}

function SyntaxHighlighter(props: SyntaxHighlighterProps): ReactElement {
  const { code } = props;
  return (
    <div className='relative highlight border border-slate-200 my-3 shadow-md dark:shadow-xl'>
      <ClipboardCopier />
      <pre className='pt-4 lg:pt-8'>
        <code className='font-mono'>
          {typeof code === "object" && !!code.length
            ? code.map((val, key) =>
                val ? <LineCode text={val} key={key} /> : <br key={key} />,
              )
            : null}
        </code>
      </pre>
    </div>
  );
}

export default SyntaxHighlighter;
