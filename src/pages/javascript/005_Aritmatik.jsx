import React from 'react'
import LineCode from '../../components/LineCode'
import data_json from '../../data-json/javascript/005_aritmatik.json'

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
                                        {
                                            data_json['sum-operator-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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
                                    {
                                            data_json['substraction-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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
                                        {
                                            data_json['multiplication-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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
                                        {
                                            data_json['distribution-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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
                                        {
                                            data_json['modulus-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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
                                        {
                                            data_json['exponent-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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
                                        {
                                            data_json['increment-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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
                                        {
                                            data_json['decrement-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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