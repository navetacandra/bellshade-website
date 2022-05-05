import React from 'react'
import LineCode from '../../components/LineCode'

function PengenalanJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                                <section>
                                    <h2 className="mb-4">Pengenalan Javascript</h2>
                                    <h4 className="mb-3">Hello World</h4>
                                    <p className="mb-3">
                                        Selamat datang di bahasa pemrograman javascript. Selamat menempuh jalan ninja sebagai programmer.
                                    </p>
                                    <p className="mb-3">
                                        Untuk menampilkan tulisan, gunakan <code className='mark-text'>console.log</code>
                                    </p>
                                    <div className="highlight mb-3">
                                        <pre><code>
                                            <LineCode text='#comment[// Menampilkan tulisan Hello World]' />
                                            <LineCode text='#_[console.log(] #yellow["Hello World"] #_[);]' /><br />
                                            <LineCode text='#comment[// Menampilkan tulisan Indonesia]' />
                                            <LineCode text='#_[console.log(] #yellow["Indonesia"] #_[);]' />
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

export default PengenalanJS