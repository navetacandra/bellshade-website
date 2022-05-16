import React from 'react'
import LineCode from './LineCode'

/**
 * 
 * @param {Object} param0.code 
 * @returns 
 */
function SyntaxHighlighter({ code = [] }) {
    return (
        <div className="highlight border border-slate-200 my-3 shadow-md dark:shadow-xl">
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