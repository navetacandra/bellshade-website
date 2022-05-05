import React from 'react'
import LineCode from '../components/LineCode'

function __template__() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section>
                                <h2 className="mb-4">Method-Method untuk Memanipulasi Object</h2>
                                <h4 className="mb-3">Object.keys()</h4>
                                <p className="mb-3">
                                    Content
                                </p>
                                {/**
                                     * 
                                     * Highlight color copied from https://petanikode.com/
                                     * 
                                    */}
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#_[code with white color]' />
                                        <LineCode text='#comment[comment code]' />
                                        <LineCode text='#yellow[code with yellow color]' />
                                        <LineCode text='#pink[code with pink color]' />
                                        <LineCode text='#green[code with green color]' />
                                        <LineCode text='#blue[code with blue color]' />
                                        <LineCode text='#purple[code with purple color]' />
                                        <LineCode text='Without breakline_' _break='no' />
                                    </code></pre>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default __template__