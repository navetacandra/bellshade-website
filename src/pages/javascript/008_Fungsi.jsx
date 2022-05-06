import React from 'react'
import LineCode from '../../components/LineCode'

function FungsiJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section className='mb-4'>
                                <h2 className="mb-4">Fungsi</h2>
                                <p className="mb-3">
                                    Function (fungsi) adalah sebuah sub-program / pecahan code yang dapat dipanggil berulang kali di manapun dan kapanpun. Function digunakan agar program yang dibuat lebih efisien dan mudah untuk dibaca, sehingga akan lebih mudah dalam menangani error.
                                </p>
                                <h3 className="mb-3">Macam-Macam Function</h3>
                                <ol>
                                    <li>
                                        <p><strong>Function Declaration</strong></p>
                                    </li>
                                    <p className="mb-3">
                                        Function Declaration adalah function yang dapat dideklarasikan baik sebelum atau sesudah function tersebut dipanggil / dijalankan.
                                    </p>
                                    <p className="mb-3">Contoh:</p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[function ] #_[buah() {]' />
                                            <LineCode text='#_[    console.log(] #yellow["Durian"] #_[);]' />
                                            <LineCode text='#_[};]' /><br />
                                            <LineCode text='#_[buah(); ] #comment[// "Durian"]' />
                                        </code></pre>
                                    </div>
                                    <li>
                                        <p><strong>Function Expression</strong></p>
                                    </li>
                                    <p className="mb-3">
                                        Function Expression adalah function yang disimpan ke dalam sebuah variabel, dan variabel tersebut dapat digunakan sebagai function (dipanggil). Namun function expression harus dibuat terlebih dahulu sebelum dipanggil.
                                    </p>
                                    <p className="mb-3">Contoh:</p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[const ] #_[benda ] #pink[= ] #blue[function] #_[() {]' />
                                            <LineCode text='#_[    console.log(] #yellow["Besi"] #_[);]' />
                                            <LineCode text='#_[};]' /><br />
                                            <LineCode text='#_[benda(); ] #comment[// "Besi"]' />
                                        </code></pre>
                                    </div>
                                    <li>
                                        <p><strong>Function Anonymous / Tidak ada nama</strong></p>
                                    </li>
                                    <p className="mb-3">
                                        Function anonymous adalah function yang tidak memiliki nama/identifier. Jenis function ini biasa digunakan jika function akan langsung dipanggil atau biasa juga digunakan jika sebuah function membutuhkan parameter function (callback function)
                                    </p>
                                    <p className="mb-3">Contoh:</p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#_[(] #blue[function] #_[() {]' />
                                            <LineCode text='#_[    console.log(] #yellow["Halo"] #_[);]' />
                                            <LineCode text='#_[})(); ] #comment[// "Halo"]' />
                                        </code></pre>
                                    </div>
                                    <li>
                                        <p><strong>Function Callback</strong></p>
                                    </li>
                                    <p className="mb-3">
                                        Function callback adalah function yang biasanya di gunakan sebagai parameter function lainnya. Function callback berfungsi jika kita ingin mengeksekusi kode setelah memanggil suatu function. Biasanya juga function callback adalah function anonymous.
                                    </p>
                                    <p className="mb-3">Contoh:</p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#_[masukkanFunction(] #blue[function] #_[() {]' />
                                            <LineCode text='#_[    console.log(] #yellow["Hai"] #_[);]' />
                                            <LineCode text='#_[}); ] #comment[// "Hai"]' />
                                        </code></pre>
                                    </div>
                                </ol>
                                <p className="mb-3">
                                    Function juga bisa memproses data yang dinamis, disitulah Parameter dan Argumen ada.
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            Parameter adalah variabel yang digunakan untuk menampung nilai yang dikirimkan saat memanggil function.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Argument adalah nilai yang dikirimkan saat function dipanggil dan akan ditampung oleh parameter.
                                        </p>
                                    </li>
                                </ul>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[// Contoh function dengan parameter]' />
                                        <LineCode text='#blue[function ] #_[perkenalan(nama, umur) {]' />
                                        <LineCode text='#comment[    // nama dan umur adalah parameter]' />
                                        <LineCode text='#_[    console.log(] #yellow[`Hai nama saya ${] #_[nama] #yellow[}, umur saya ] #yellow[${] #_[umur] #yellow[} tahun.`] #_[);]' />
                                        <LineCode text='#_[}]' /><br />
                                        <LineCode text='#comment[// "Dimas Saputra" merupakan argumen untuk parameter nama]' />
                                        <LineCode text='#comment[// 17 merupakan argumen untuk parameter umur]' />
                                        <LineCode text='#_[perkenalan(] #yellow["Dimas Saputra"] #_[, ] #purple[17] #_[); ]' />
                                        <LineCode text='#comment[// "Hai nama saya Dimas Saputra, umur saya 17 tahun."]' />
                                    </code></pre>
                                </div>
                            </section>
                            <section>
                                <h3 className="mb-4">Sifat Function</h3>
                                <p className="mb-3">
                                    Sebuah function boleh mengembalikan sebuah nilai ataupun tidak mengembalikan nilai. Jika ingin mengembalikan sebuah nilai maka gunakan perintah return.
                                </p>
                                <p className="mb-3">
                                    Dinamakan <code className="mark-text">Void Function</code> jika sebuah function tersebut tidak mengembalikan sebuah nilai{', '}
                                    <code className="mark-text">Returning Function</code> ketika dia mengembalikan value.
                                </p>
                                <p className="mb-3">Contoh:</p>
                                <div className="highlight">
                                    <pre><code>
                                        <LineCode text='#comment[// Contoh void function]' />
                                        <LineCode text='#blue[function ] #_[voidFunction() {]' />
                                        <LineCode text='#_[    console.log(] #yellow["Aku tidak mengembalikan nilai"] #_[);]' />
                                        <LineCode text='#_[}]' /><br />
                                        <LineCode text='##_[voidFunction();]' /><br />
                                        <LineCode text='#comment[// Contoh returning function]' />
                                        <LineCode text='#blue[function ] #_[returningFunction() {]' />
                                        <LineCode text='#comment[    // nilai yang dikembalikan harus ditampung dengan variabel]' />
                                        <LineCode text='#comment[    // atau dengan menjadikan argument dari sebuah function juga bisa]' />
                                        <LineCode text='#pink[    return ] #yellow["Aku adalah fungsi yang mengembalikan nilai"] #_[;]' />
                                        <LineCode text='#_[}]' />
                                        <LineCode text='#_[console.log(returningFunction());]' />
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

export default FungsiJS