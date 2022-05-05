import React from 'react'
import LineCode from '../../components/LineCode'

function KonsepObjectJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section>
                                <h2 className="mb-4">Object</h2>
                                <p className="mb-3">
                                    Object adalah struktur data yang bisa menyimpan
                                    lebih dari satu pasangan <code className="mark-text">nama variabel</code> dan <code className="mark-text">nilai</code>{' '}
                                    di dalamnya. Pasangan <code className="mark-text">nama variabel</code> dan <code className="mark-text">nilai</code> dipisahkan dengan tanda titik dua (:)
                                    dan dikenal sebagai <i>key-value</i> pairs atau <i>name-value</i> pairs.
                                </p>
                                <p className="mb-3">
                                    Berbeda dengan <i>array</i> yang menggunakan kurung siku [], <i>object</i> ditandai dengan adanya kurung kurawal { }.
                                </p>
                                <p className="mb-3">
                                    Salah satu cara membuat <i>object</i> adalah dengan menggunakan <i>object</i> literal atau mendefinisikan <i>object</i> secara langsung kedalam sebuah variabel.
                                </p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[const ] #_[dataDiri ] #pink[= ] #[{nama] #pink[: ] #yellow["Fatah"] #_[, alamat] #pink[: ] #yellow["Bandung"] #_[, umur] #pink[: ] #purple[20] #_[};]' />
                                    </code></pre>
                                </div>
                                <p className="mb-3">
                                    Pada contoh di atas dengan menggunakan <i>object literal</i> dibuat
                                    variabel <code className="mark-text">dataDiri</code> yang dapat
                                    menyimpan lebih dari satu variabel di dalamnya sebagai sebuah <i>object</i>.
                                </p>
                            </section>
                            <section className="mb-5">
                                <h2 className="mb-3">Property dan Method</h2>
                                <p className="mb-3">
                                    Dalam <i>object</i>, variabel yang menyimpan nilai
                                    seperti <code className="mark-text">string</code>, <code className="mark-text">number</code>{', '}
                                    <code className="mark-text">boolean</code>, atau <code className="mark-text">array</code> disebut
                                    sebagai <strong>property</strong>. Dari contoh variabel <code className="mark-text">dataDiri</code> di {'atas, '}
                                    <i>object</i> yang dibuat memiliki <i>property</i> yaitu nama, alamat, dan umur.
                                </p>
                                <p className="mb-3">
                                    Untuk mengambil nilai sebuah <i>property</i> dapat menggunakan <i>dot notation</i> atau notasi titik,
                                    yaitu dengan menulis titik setelah nama <i>object</i> diikuti nama <i>property</i> yang ingin diambil.
                                </p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[const ] #_[dataDiri ] #pink[= ] #[{nama] #pink[: ] #yellow["Fatah"] #_[, alamat] #pink[: ] #yellow["Bandung"] #_[, umur] #pink[: ] #purple[20]#_[};]' />
                                        <LineCode text='#_[console.log(dataDiri.alamat); ] #comment[// pada dataDiri.alamat memiliki nilai "Bandung"]' />
                                    </code></pre>
                                </div>
                                <p className="mb-3">
                                Selain dapat menyimpan nilai seperti <code className="mark-text">string</code> dan <code className="mark-text">number</code>, di dalam <i>object </i>
                                juga dapat disimpan fungsi yang bisa dipanggil kemudian. Variabel yang menyimpan fungsi dikenal sebagai <span className="fw-bolder">method</span>.
                                </p>
                                <p className="mb-3">
                                Cara memanggil fungsi pada <i>method</i> adalah dengan menggunakan <i>dot notation</i> atau notasi titik seperti pada <i>property</i> kemudian menambahkan tanda kurung di akhir.
                                </p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[const ] #_[dataDiri ] #pink[= ] #[{nama] #pink[: ] #yellow["Fatah"] #_[, alamat] #pink[: ] #yellow["Bandung"] #_[, umur] #pink[: ] #purple[20] #_[, perkenalan] #pink[: ] #blue[function] #_[() {]' />
                                        <LineCode text='#_[    console.log(] #yellow[`Hai, nama saya ${] #pink[this] #_[.nama] #yellow[}`] #_[);]' />
                                        <LineCode text='#_[}};]' /><br />
                                        <LineCode text='#_[dataDiri.perkenalan(); ] #comment[// menghasilkan tampilan pada konsol yaitu "Hai, nama saya Fatah"]' />
                                    </code></pre>
                                </div>
                                <p className="mb-3">
                                Dari contoh di atas, <i>object</i> <code className="mark-text">dataDiri</code> memiliki <i>method</i> yang diberi nama perkenalan. <i>Method</i> perkenalan kemudian dipanggil setelah <code className="mark-text">dataDiri</code> dideklarasikan dan menjalankan perintah dalam fungsinya.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KonsepObjectJS