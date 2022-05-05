import React from 'react'
import LineCode from '../../components/LineCode'

function ArithmeticJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section className="mb-5">
                                <h2 className="mb-4">Operasi Aritmatika pada Javascript</h2>
                                <p className="mb-3">
                                    Aritmatika atau biasa disebut penghitungan merupakan cabang matematika yang mempelajari operasi dasar bilangan seperti penjumlahan, pengurangan, perkalian, pembagian, dan sebagainya.
                                </p>
                                <p className="mb-3">
                                    Setiap bahasa pemrograman termasuk javascript memiliki operator aritmatika untuk melakukan penghitungan dasar. Dalam Javascript sendiri terdapat beberapa operator yaitu :
                                </p>
                            </section>
                            <section className="mb-5">
                                <h4 className="mb-3">Penjumlahan (+)</h4>
                                <p className="mb-3">
                                    Operator ini digunakan untuk melakukan operasi penjumlahan.
                                </p>
                                <div className="note-text mb-3">
                                    <p>
                                        Catatan : pada javascript, operator + (penjumlahan) juga digunakan untuk rangkaian (concatenation) string. Jadi perhatikan penggunaan + pada string dan integer.
                                    </p>
                                </div>
                                <p className="mb-3">Contoh :</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[//== Penjumlahan ==//]' />
                                        <LineCode text='#_[console.log(] #purple[10 ] #pink[+ ] #purple[5] #_[); ]' />
                                        <LineCode text='#comment[// menghasilkan 15]' /><br />
                                        <LineCode text='#comment[/**]' />
                                        <LineCode text='#comment[ * contoh perbedaan operator penjumlahan dan concatenation.]' />
                                        <LineCode text='#comment[ * semua Integer akan berubah menjadi string apabila bertemu dengan]' />
                                        <LineCode text='#comment[ * concatenation dan akan menghasilkan string juga.]' />
                                        <LineCode text='#comment[ */]' />
                                        <LineCode text='#_[console.log(] #purple[3 ] #pink[+ ] #purple[3] #_[); ] #comment[// 6]' />
                                        <LineCode text='#_[console.log(] #purple[3 ] #pink[+ ] #yellow["3"] #_[); ] #comment[// "33"]' />
                                        <LineCode text='#_[console.log(] #purple[3 ] #pink[+ ] #purple[3 ] #pink[+ ] #yellow["3"] #_[); ] #comment[// "63"]' />
                                        <LineCode text='#_[console.log(] #purple[3 ] #pink[+ ] #yellow["3" ] #pink[+ ] #purple[3] #_[); ] #comment[// "333"]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h4>Pengurangan (-)</h4>
                                <p className="mb-3">
                                    Operator ini digunakan untuk melakukan operasi pengurangan.
                                </p>
                                <p className="mb-3">Contoh :</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[//== Pengurangan ==//]' />
                                        <LineCode text='#_[console.log(] #purple[7 ] #pink[- ] #purple[2] #_[); ]' />
                                        <LineCode text='#comment[// menghasilkan 5]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h4>Perkalian (*)</h4>
                                <p className="mb-3">
                                    Operator ini digunakan untuk melakukan operasi perkalian.
                                </p>
                                <p className="mb-3">Contoh :</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[//== Perkalian ==//]' />
                                        <LineCode text='#_[console.log(] #purple[10 ] #pink[* ] #purple[5] #_[); ]' />
                                        <LineCode text='#comment[// menghasilkan 50]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h4>Pembagian (/)</h4>
                                <p className="mb-3">
                                    Operator ini digunakan untuk melakukan operasi pembagian.
                                </p>
                                <p className="mb-3">Contoh :</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[//== Pembagian ==//]' />
                                        <LineCode text='#_[console.log(] #purple[8 ] #pink[/ ] #purple[4] #_[); ]' />
                                        <LineCode text='#comment[// menghasilkan 2]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h4>Modulus (%)</h4>
                                <p className="mb-3">
                                    Operator ini berfungsi untuk mencari sisa bagi suatu bilangan. Operator ini biasa digunakan untuk mengecek apakah suatu bilangan ganjil atau genap.
                                </p>
                                <p className="mb-3">Contoh :</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[//== Modulus ==//]' />
                                        <LineCode text='#_[console.log(] #purple[7 ] #pink[% ] #purple[2] #_[); ]' />
                                        <LineCode text='#comment[// menghasilkan 1]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h4>Eksponen (**)</h4>
                                <p className="mb-3">
                                    Sesuai namanya, operator ini berfungsi untuk membuat eksponen. Eksponen atau yang biasa disebut bilangan berpangkat adalah suatu bentuk perkalian dengan bilangan yang sama berulang-ulang.
                                </p>
                                <p className="mb-3">Contoh :</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[//== Eksponenen ==//]' />
                                        <LineCode text='#_[console.log(] #purple[3 ] #pink[** ] #purple[3] #_[); ]' />
                                        <LineCode text='#comment[// menghasilkan 3 * 3 * 3 = 27]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section className="mb-5">
                                <h4>Increment/Kenaikan (++)</h4>
                                <p className="mb-3">
                                    Operator ini digunakan untuk menambah suatu bilangan sebanyak 1 angka. Operator ini biasa digunakan pada perulangan.
                                </p>
                                <p className="mb-3">Contoh :</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[//== Increment ==//]' />
                                        <LineCode text='#blue[let ] #_[x ] #pink[= ] #purple[10] #_[;]' />
                                        <LineCode text='#_[console.log(] #_[x] #pink[++] #_[, ] #_[x] #pink[++] #_[, ] #_[x] #pink[++] #_[, ] #_[x] #pink[++] #_[); ]' />
                                        <LineCode text='#comment[// menghasilkan 10 11 12 13]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section>
                                <h4>Decrement/Penurunan  (--)</h4>
                                <p className="mb-3">
                                Operator ini kebalikan dari operator increment, digunakan untuk mengurangi suatu bilangan sebanyak 1 angka. Operator ini biasa digunakan pada perulangan.
                                </p>
                                <p className="mb-3">Contoh :</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[//== Decrement ==//]' />
                                        <LineCode text='#blue[let ] #_[y ] #pink[= ] #purple[5] #_[;]' />
                                        <LineCode text='#_[console.log(] #_[y] #pink[--] #_[, ] #_[y] #pink[--] #_[, ] #_[y] #pink[--] #_[, ] #_[y] #pink[--] #_[); ]' />
                                        <LineCode text='#comment[// menghasilkan 5 4 3 2]' />
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

export default ArithmeticJS