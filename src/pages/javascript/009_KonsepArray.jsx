import React from 'react'
import LineCode from '../../components/LineCode'

function KonsepArrayJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section className='mb-3'>
                                <h2 className="mb-4">Belajar Penggunaan Array di Javascript</h2>
                            </section>
                            <section id="declare-array" className='mb-5'>
                                <h4 className="mb-3">Mendeklarasi dan Membuat Array</h4>
                                <p className="mb-3">
                                    Untuk mendeklarasikan array pada javascript adalah dengan menggunakan tanda kurung siku buka dan {'kurung '}
                                    siku tutup <code className="mark-text">[]</code>.
                                </p>
                                <p className="mb-3">Contoh:</p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[let ] #_[array1 ] #pink[= ] #_[[] #purple[1] #_[, ] #purple[2] #_[, ] #purple[3] #_[, ] #purple[4] #_[, ] #purple[5] #_[];]' />
                                        <LineCode text='#blue[let ] #_[array2 ] #pink[= ] #_[[] #yellow["satu"] #_[, ] #yellow["dua"] #_[, ] #yellow["tiga"] #_[];]'/>
                                        <LineCode text='#blue[let ] #_[array3 ] #pink[= ] #_[[] #pink[true] #_[, ] #pink[false] #_[];]' />
                                        <LineCode text='#blue[let ] #_[array4 ] #pink[= ] #_[[] #purple[1] #_[, ] #yellow["satu"] #_[, ] #pink[true] #_[];]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section id="access-array" className="mb-5">
                                <h4 className="mb-3">Mengakses dan Mengambil Nilai pada Array</h4>
                                <p className="mb-3">Untuk mengambil / mengakses nilai yang ada pada array adalah dengan menggunakan angka sebagai index yang dibungkus dengan kurung siku.</p>
                                <div className="note-text mb-3">
                                    <p>Index pada array selalu dimulai dari angka 0</p>
                                </div>
                                <p className="mb-3">Contoh:</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#_[console.log(array1] #_[[] #purple[0] #_[]); ] #comment[// 1]' />
                                        <LineCode text='#_[console.log(array2] #_[[] #purple[1] #_[]); ] #comment[// "satu"]' />
                                        <LineCode text='#_[console.log(array3] #_[[] #purple[1] #_[]); ] #comment[// false]' />
                                        <LineCode text='#_[console.log(array4] #_[[] #purple[2] #_[]); ] #comment[// true]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section id="array-length" className="mb-5">
                                <h4 className="mb-3">Mengecek Panjang / Banyak Data pada Array</h4>
                                <p className="mb-3">
                                    Untuk mengambil panjang (banyak data) yang ada di dalam array kita bisa
                                    menggunakan method <code className="mark-text">length</code> yang merupakan built-in function pada array.
                                </p>
                                <p className="mb-3">Contoh:</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#_[console.log(array1.length); ] #comment[// 5]' />
                                        <LineCode text='#_[console.log(array2.length); ] #comment[// 3]' />
                                        <LineCode text='#_[console.log(array3.length); ] #comment[// 2]' />
                                        <LineCode text='#_[console.log(array4.length); ] #comment[// 3]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section id="array-foreach" className="mb-5">
                                <h4 className="mb-3">Melakukan Perulangan dengan Array (forEach)</h4>
                                <p className="mb-3">
                                    Untuk mengeksekusi <a href="/javascript/fungsi" className="text-decoration-none">
                                        <code className="mark-text">void function</code>
                                    </a> yang perlu item-item yang ada di dalam array. foEach merupakan built-in function pada array    .
                                </p>
                                <p className="mb-3">Contoh:</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#_[array2.forEach(function(data) {]' />
                                        <LineCode text='#_[    console.log(data);]' />
                                        <LineCode text='#_[}]' />
                                        <LineCode text='#comment[// output:]' />
                                        <LineCode text='#comment[/**]' />
                                        <LineCode text='#comment[ * "satu"]' />
                                        <LineCode text='#comment[ * "dua"]' />
                                        <LineCode text='#comment[ * "tiga"]' />
                                        <LineCode text='#comment[ */]' />
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

export default KonsepArrayJS