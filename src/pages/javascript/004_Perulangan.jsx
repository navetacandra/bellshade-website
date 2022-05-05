import React, { Fragment } from 'react'
import LineCode from '../../components/LineCode'

function PerulanganJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section className='mb-4'>
                                <h2 className="mb-4">Pengulangan (Looping)</h2>
                                <p className="mb-3">
                                    Looping dalam bahasa pemrograman manapun itu melakukan tugas yang berulang berdasarkan kondisi yang diberikan.
                                </p>
                                <h4 className="mb-3">Jenis-Jenis Looping</h4>
                                <p className="mb-3">
                                    Dalam JavaScript terdapat beberapa fungsi looping, diantaranya:
                                </p>

                                <ol>
                                    <Fragment>
                                        <li>
                                            <code className="mark-text">for</code> loop
                                        </li>
                                        <p className="mb-3">
                                            <code className="mark-text">for loop</code>
                                            {' ini akan menjalankan kode didalamnya dengan menambahkan kondisi, yaitu kondisi '}
                                            <code className="mark-text">initial</code>,{' '}
                                            <code className="mark-text">expressionCondition</code>, {'dan cara '}
                                            <code className="mark-text">increment</code> untuk menjalankan looping tersebut.
                                        </p>
                                        <div className="highlight">
                                            <pre>
                                                <code>
                                                    <LineCode text="#_[for(initial, expressionCondition, increment) {]" />
                                                    <LineCode text="#_[    // kode di dalam sini]" />
                                                    <LineCode text="#_[}]" />
                                                </code>
                                            </pre>
                                        </div>
                                        <p className="mb-3">Contoh :</p>
                                        <div className="highlight">
                                            <pre>
                                                <code>
                                                    <LineCode text="#comment[// kode ini akan menjalankan perulangan]" />
                                                    <LineCode text="#comment[// selama 10 kali, dimulai dari angka 0]" />
                                                    <LineCode text="#pink[for] #_[(] #blue[let ] #_[i ] #pink[= ] #purple[0] #_[; i ] #pink[< ] #purple[10] #_[; i] #pink[++] #_[) {]" />
                                                    <LineCode text='#_[    console.log(i);]' />
                                                    <LineCode text='#_[}]' /><br />
                                                    <LineCode text='#comment[//== Bentuk "for" yang lain. ==//]' /><br />
                                                    <LineCode text='#comment[// for in]' />
                                                    <LineCode text='#blue[let ] #_[buah ] #pink[= ] #_[[] #yellow["Anggur"] #_[, ] #yellow["Apel"] #_[, ] #yellow["Pepaya"] #_[, ] #yellow["Nanas"] #_[, ] #yellow["Jeruk"]' _break='no' />&#93;;<br />
                                                    <LineCode text="#pink[for] #_[(] #blue[const ] #_[n ] #pink[in ] #_[buah] #_[) {]" />
                                                    <LineCode text='#_[    console.log(] #yellow[`${] #_[n ] #pink[+ ] #purple[1] #yellow[}. ${] #_[buah]' _break='no' />[n]
                                                    <LineCode text='#yellow[}`] #_[);]' />
                                                    <LineCode text='#_[}]' /><br />
                                                    <LineCode text='#comment[// for of]' />
                                                    <LineCode text='#blue[let ] #_[buah2 ] #pink[= ] #_[[] #yellow["Anggur"] #_[, ] #yellow["Apel"] #_[, ] #yellow["Pepaya"] #_[, ] #yellow["Nanas"] #_[, ] #yellow["Jeruk"]' _break='no' />&#93;;<br />
                                                    <LineCode text="#pink[for] #_[(] #blue[const ] #_[x ] #pink[of ] #_[buah2] #_[) {]" />
                                                    <LineCode text='#_[    console.log(x);]' />
                                                    <LineCode text='#_[}]' /><br />
                                                </code>
                                            </pre>
                                        </div>
                                    </Fragment>

                                    <Fragment>
                                        <li>
                                            <code className="mark-text">while</code> loop
                                        </li>
                                        <p className="mb-3">

                                        </p>
                                        <div className="highlight">
                                            <pre>
                                                <code>
                                                    <LineCode text="#_[while(boolean) {]" />
                                                    <LineCode text="#_[    // kode di dalam sini]" />
                                                    <LineCode text="#_[}]" />
                                                </code>
                                            </pre>
                                        </div>
                                        <p className="mb-3">Contoh :</p>
                                        <div className="highlight">
                                            <pre>
                                                <code>
                                                    <LineCode text='#blue[let ] #_[pengunjung ] #pink[= ] #purple[0] #_[;]' /><br />
                                                    <LineCode text='#pink[while] #_[(pengunjung ] #pink[< ] #purple[20] #_[) {]' />
                                                    <LineCode text='#_[    pengunjung] #pink[++] #_[;]' />
                                                    <LineCode text='#pink[    if] #_[(pengunjung ] #pink[> ] #purple[0] #_[) {]' />
                                                    <LineCode text='#_[        console.log(] #yellow[`Pengunjung ke: ${] #_[pengunjung] #yellow[}`] #_[);]' />
                                                    <LineCode text='#_[    }]' />
                                                    <LineCode text='#_[}]' />
                                                </code>
                                            </pre>
                                        </div>
                                    </Fragment>

                                    <Fragment>
                                        <li>
                                            <code className="mark-text">do..while</code> loop
                                        </li>
                                        <p className="mb-3">

                                        </p>
                                        <div className="highlight">
                                            <pre>
                                                <code>
                                                    <LineCode text="#_[do {]" />
                                                    <LineCode text="#_[    // kode yang awalnya dieksekusi dan akan di looping]" />
                                                    <LineCode text="#_[} while(boolean);]" />
                                                </code>
                                            </pre>
                                        </div>
                                        <p className="mb-3">Contoh :</p>
                                        <div className="highlight">
                                            <pre>
                                                <code>
                                                    <LineCode text="#comment[]" />
                                                    <LineCode text='#blue[let ] #_[jumlahBarang ] #pink[= ] #purple[-2] #_[;]' /><br />
                                                    <LineCode text="#pink[do ] #_[{]" />
                                                    <LineCode text="#_[    jumlahBarang ] #pink[+= ] #purple[3] #_[;]" />
                                                    <LineCode text="#_[    console.log(jumlahBarang);" />
                                                    <LineCode text="#_[} ] #pink[while] #_[(jumlahBarang ] #pink[< ] #purple[20] #_[);]" />
                                                </code>
                                            </pre>
                                        </div>
                                    </Fragment>
                                </ol>
                            </section>
                            <section>
                                <h3 className="mb-4">Keyword Spesial dalam Looping</h3>
                                <ol>
                                    <li>
                                        <code className="mark-text">
                                            break
                                        </code>
                                    </li>
                                    <p className="mb-3">
                                        Break merupakan statement untuk mengakhiri perulangan, biasanya digunakan pengkondisian untuk menghentikannya.
                                    </p>
                                    <p className="mb-3">Contoh <code className="mark-text">break</code>:</p>
                                    <div className="highlight mb-3">
                                        <pre><code>
                                        <LineCode text='#comment[// Kode ini akan berhenti jika i mencapai no 15]' />
                                        <LineCode text='#pink[for] #_[(] #blue[let ] #_[i ] #pink[= ] #purple[0] #_[; i ] #pink[<= ] #purple[20] #_[; i] #pink[++] #_[) {]' />
                                        <LineCode text='#pink[    if] #_[(i ] #pink[> ] #purple[14] #_[) {]' />
                                        <LineCode text='#pink[        break] #_[;]' />
                                        <LineCode text='#_[    }]' />
                                        <LineCode text='#_[    console.log(i);]' />
                                        <LineCode text='#_[}]' />
                                        </code></pre>
                                    </div>
                                    <li>
                                        <code className="mark-text">
                                            continue
                                        </code>
                                    </li>
                                    <p className="mb-3">
                                        Continue merupakan statement untuk melewati/melompati perulangan. Statement ini akan mengakhiri program dan melanjutkan ke perulangan selanjutnya.
                                    </p>
                                    <p className="mb-3">
                                    Perbedaan continue {'dengan '}
                                    <code className="mark-text">break</code> yaitu cara berhentinya. {'Jika '}
                                    <code className="mark-text">continue</code> hanya berhenti di kondisi dan melewatinya, {'sedangkan '}
                                    <code className="mark-text">break</code> itu benar-benar mematikan programnya.
                                    </p>
                                    <p className="mb-3">Contoh <code className="mark-text">continue</code>:</p>
                                    <div className="highlight mb-3">
                                        <pre><code>
                                        <LineCode text='#comment[// Tampilkan bilangan yang merupakan kelipatan 2]' />
                                        <LineCode text='#pink[for] #_[(] #blue[let ] #_[i ] #pink[= ] #purple[0] #_[; i ] #pink[<= ] #purple[20] #_[; i] #pink[++] #_[) {]' />
                                        <LineCode text='#pink[    if] #_[(i ] #pink[% ] #purple[2] #_[) {]' />
                                        <LineCode text='#pink[        continue] #_[;]' />
                                        <LineCode text='#_[    }]' />
                                        <LineCode text='#_[    console.log(i);]' />
                                        <LineCode text='#_[}]' />
                                        </code></pre>
                                    </div>
                                </ol>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerulanganJS