import React from 'react'
import LineCode from './LineCode'

function ClipboardCopier() {
    function copyToClipboard(textToCopy, resolve, reject) {
        // navigator clipboard api needs a secure context (https)
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard api method'
            return navigator.clipboard.writeText(textToCopy)
                .then(() => resolve())
                .catch(() => reject());
        } else {
            // text area method
            let textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                // here the magic happens
                document.execCommand('copy') ? resolve() : reject();
                textArea.remove();
            });
        }
    }

    function handleClick(el) {
        let parent = el.parentElement;
        let btn = parent.querySelector('button');
        let code_text = parent.querySelector('pre').innerText;
        copyToClipboard(code_text, () => {
            btn.classList.remove('text-slate-50')
            btn.classList.add('text-green-500')
            setTimeout(() => {
                btn.classList.remove('text-green-500')
                btn.classList.add('text-slate-50')
            }, 2000);
        }, () => {
            btn.classList.remove('text-slate-50')
            btn.classList.add('text-red-500')
            setTimeout(() => {
                btn.classList.remove('text-red-500')
                btn.classList.add('text-slate-50')
            }, 2000);
        })
        // alert(navigator.clipboard)
    }
    return (
        <button className='button absolute top-2 text-slate-50 right-8 opacity-70 hover:opacity-100' onClick={(el) => handleClick(el.target)}>
            Copy
        </button>
    )
}

/**
 * 
 * @param {Object} param0.code 
 * @returns 
 */
function SyntaxHighlighter({ code = [] }) {
    return (
        <div className="relative highlight border border-slate-200 my-3 shadow-md dark:shadow-xl">
            <ClipboardCopier />
            <pre><code>
                {
                    typeof code === 'object' && !!code.length
                        ? (
                            code.map((val, key) => (
                                !!val ? <LineCode text={val} key={key} /> : <br key={key} />
                            ))
                        ) : null
                }
            </code></pre>
        </div>
    )
}

export default SyntaxHighlighter