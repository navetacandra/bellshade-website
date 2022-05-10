import React from 'react'
import LineCode from './LineCode'

/**
 * 
 * @param {Object} param0.code 
 * @returns 
 */
function SyntaxHighlighter({ code = [] }) {
    return (
        <div className="highlight my-3">
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