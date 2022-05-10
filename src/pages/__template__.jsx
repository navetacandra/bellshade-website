import React from 'react'
import LineCode from '../components/LineCode'

function __template__() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-warp">
                <div className="self-center w-full px-5 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white my-10 shadow-lg">
                    <section className='my-5'>
                        <h2 className="title-2">Method-Method untuk Memanipulasi Object</h2>
                        <h3 className="subtitle-h3">Object.keys()</h3>
                        <h4 className="subtitle-h4">Object.keys()</h4>
                        <p className="section_text">
                            Content
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default __template__
{/**
    * 
    * Highlight color copied from VSCode One Dark Theme
    * 
*/}
// <div className="highlight mb-3">
//     <pre><code>
//         <LineCode text='#cmt[comment code]' />
//         <LineCode text='#_[code with default color]' />
//         <LineCode text='#c[code with cyan color]' />
//         <LineCode text='#m[code with magenta color]' />
//         <LineCode text='#y[code with yellow color]' />
//         <LineCode text='#g[code with green color]' />
//         <LineCode text='#b[code with blue color]' />
//         <LineCode text='#p[code with pink color]' />
//         <LineCode text='#o[code with orange color]' />
//         <LineCode text='Without breakline_' _break='no' />
//     </code></pre>
// </div>