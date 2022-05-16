import React from 'react'
import { find_first, find_last } from '../Function';
import LineCode from './LineCode'
import highlight_color from '../data-json/highlight-color.json'

function extractText(text) {
    let elem = text.split('] #').map((val, i) => {
        val = text.split('] #').length < 2
            ? val.slice(1)
            : i < 1
                ? val.slice(1) + ']'
                : i === (text.split('] #').length - 1)
                    ? val
                    : val + ']';
        let color_name = val.slice(0, find_first(val, '['));
        let is_err_wv = color_name.includes('err_wv_');
        let filter_color = highlight_color.filter(color => color.name === (is_err_wv ? color_name.replace('err_wv_', '') : color_name))[0] || { name: '', color: '#fff' };
        let _text_ = val.slice(find_first(val, '['))
        let loc = find_last(_text_, ']')
        _text_ = `${_text_.slice(1, loc - _text_.length)}${_text_.slice(loc + 2)}`
        return {
            color: filter_color.color,
            text: _text_,
            err_wavy: is_err_wv
        }
    });

    return elem.map(v => v.text).join('');
}

function ClipboardCopier({ text }) {
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
        copyToClipboard(text, () => {
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
    let text_code = code.map(t => extractText(t)).join('\n')
    return (
        <div className="relative highlight border border-slate-200 my-3 shadow-md dark:shadow-xl">
            <ClipboardCopier text={text_code} />
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