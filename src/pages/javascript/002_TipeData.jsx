import React, { Fragment } from 'react'
import LineCode from '../../components/LineCode'
import data_json from '../../data-json/javascript/data-type.json'

function DataTypeJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section>
                                <h2 className="mb-4">Variabel dan Tipe Data</h2>
                                <p className="mb-3">
                                    Apa itu variabel dalam bahasa pemrograman ?
                                </p>
                                <p className="mb-3">
                                    Variabel adalah tempat penyimpanan di mana penyimpanan itu diberi nama, di mana nama yang digunakan harus unik.
                                </p>
                                <h4 className="mb-4">Jenis-Jenis Mendeklarasikan Variabel</h4>
                                <p className="mb-3">
                                    Dalam bahasa pemrograman JavaScript sendiri memiliki 3 cara mendeklarasikan sebuah variabel, yaitu
                                </p>
                                <ol>
                                    {
                                        data_json['varibel-type'].map((val, key) => (
                                            <li>
                                                <code className="mark-text">{val.type}</code> {val.desc}
                                            </li>
                                        ))
                                    }
                                </ol>
                                <p className="mb-3">Contoh:</p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#comment[// Isi variabel umur tidak bisa diubah, jika]' />
                                        <LineCode text='#comment[// dipaksa akan muncul sebuah pesan error]' />
                                        <LineCode text='#blue[const ] #_[umur ] #pink[= ] #purple[17] #_[;]' />
                                        <LineCode text='#blue[let ] #_[namaBuah ] #pink[= ] #yellow["Pepaya"] #_[;]' />
                                        <LineCode text='#blue[var ] #_[hoax ] #pink[= ] #pink[true] #_[;]' /><br />
                                        <LineCode text='#_[console.log(umur); ] #comment[// 17]' />
                                        <LineCode text='#_[console.log(namaBuah); ] #comment[// Pepaya]' />
                                        <LineCode text='#_[console.log(hoax); ] #comment[// true]' /><br />
                                        <LineCode text='#comment[// Misal kita mengubah nama buah menjadi Durian]' />
                                        <LineCode text='#_[namaBuah ] #pink[= ] #yellow["Durian"] #_[;]' />
                                        <LineCode text='#_[console.log(namaBuah); ] #comment[// Durian]' /><br />
                                        <LineCode text='#comment[// Misal mengubah variabel hoax menjadi false]' />
                                        <LineCode text='#_[hoax ] #pink[= ] #pink[false] #_[;]' />
                                        <LineCode text='#_[console.log(hoax); ] #comment[// false]' />
                                    </code></pre>
                                </div>
                                <h4 className="mb-3">Jenis-Jenis Tipe Data</h4>
                                <p className="mb-3">
                                    Untuk tipe data, JavaScript memiliki banyak tipe data, kali ini membahas 3 tipe data dasar yang sering digunakan, yaitu:
                                </p>
                                <ol>
                                    <li>
                                        <code className="mark-text">string</code>
                                    </li>
                                    <p className="mb-3">
                                        Merupakan tipe data yang berupa tulisan/teks.
                                        Untuk mendeklarasikannya, gunakan tanda (<code className="mark-text">'</code>),
                                        (<code className="mark-text">"</code>),
                                        atau (<code className="mark-text">``</code>).
                                    </p>
                                    <li>
                                        <code className="mark-text">number</code>
                                    </li>
                                    <p className="mb-3">
                                        Merupakan tipe data yang berupa angka.
                                        Bisa berupa bilangan biasa (misal 1,2,3, dst.) juga bilangan yang memiliki koma,
                                        tetapi bilangan yang memiliki koma,
                                        tanda komanya diganti dengan titik (misal 1.5, 3.14, 7.27, 19.45 dst...).
                                    </p>
                                    <li>
                                        <code className="mark-text">boolean</code>
                                    </li>
                                    <p className="mb-3">
                                        Merupakan tipe data yang berupa hal kelogisan.
                                        Valuenya hanya dua, <code className="mark-text">true</code>{' dan '}
                                        <code className="mark-text">false</code>.
                                    </p>
                                    <li>
                                        <code className="mark-text">null</code>
                                    </li>
                                    <p className="mb-3">
                                        Merupakan tipe data yang biasanya digunakan untuk menyatakan suatu yang tidak ada.
                                        null ini bersifat falsy jika digunakan untuk boolean operator.
                                        Value dari <code className="mark-text">null</code>{' hanya '}
                                        <code className="mark-text">null</code>.
                                    </p>
                                    <li>
                                        <code className="mark-text">undefined</code>
                                    </li>
                                    <p className="mb-3">
                                        Merupakan tipe data yang biasanya digunakan untuk menyatakan suatu yang tak terdefinisikan sebelumnya,
                                        akan bersifat falsy jika digunakan untuk boolean operator.
                                        Value dari <code className="mark-text">undefined</code>{' hanya '}
                                        <code className="mark-text">undefined</code>.
                                    </p>
                                    <li>
                                        <code className="mark-text">object</code>
                                    </li>
                                    <p className="mb-3">
                                        Merupakan tipe data yang mempunyai pasangan key dan value.
                                        Maksud dari key adalah nama yang harus diberikan untuk dijadikan tanda pengenal,
                                        supaya value dari object bisa digunakan.
                                    </p>
                                    <p className="mb-3">
                                        Object ini menggunakan kurung kurawal
                                        (<code className="mark-text">{'{}'}</code>) untuk menyimpan pasangan dari key dan value.
                                    </p>
                                </ol>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[const ] #_[jumlahBuku ] #pink[= ] #pink[null] #_[;]' /><br />
                                        <LineCode text='#blue[const ] #_[orang ] #pink[= ] #_[{]' />
                                        <LineCode text='#_[    nama: ] #yellow["Abbie Sudiati"] #_[,]' />
                                        <LineCode text='#_[    umur: ] #purple[25]' />
                                        <LineCode text='#_[};]' /><br />
                                        <LineCode text='#_[console.log(jumlahBuku); ] #comment[// null]' /><br />
                                        <LineCode text='#comment[// Ini akan menampilkan dua key beserta valuenya]' />
                                        <LineCode text='#_[console.log(orang);]' /><br />
                                        <LineCode text='#comment[// Jika ingin mengakses nama atau umurnya]' />
                                        <LineCode text='#_[console.log(orang.nama); ] #comment[// Abbie Sudiati]' />
                                        <LineCode text='#_[console.log(orang.umur); ] #comment[// 25]' /><br />
                                        <LineCode text='#comment[// Jika key yang diluar object yang didefinisikan]' />
                                        <LineCode text='#comment[// tidak pernah dibuat, maka hasilnya undefined]' />
                                        <LineCode text='#_[console.log(orang.nik); ] #comment[// undefined]' />
                                    </code></pre>
                                </div>
                                <div className="note-text mb-3">
                                    <p>
                                        Truthy : nilai yang dianggap benar ketika ditemui dalam konteks Boolean.
                                        <br />
                                        Falsy : nilai yang dianggap salah ketika ditemui dalam konteks Boolean.
                                    </p>
                                </div>
                                <h4 className="mb-3">typeOf</h4>
                                <p className="mb-3">
                                    <i>typeOf</i> adalah salah satu jenis operator java script yang dapat digunakan untuk mengecek/melihat tipe data dari sebuah variabel.
                                </p>
                                <p className="mb-3">
                                    contoh dari penggunaan <i>typeOf</i> adalah:
                                </p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[const ] #_[umur ] #pink[= ] #purple[17] #_[;]' />
                                        <LineCode text='#_[console.log(] #pink[typeof ] #_[umur);] #comment[ // number]' /><br />
                                        <LineCode text='#blue[let ] #_[namaBuah ] #pink[= ] #yellow["Pepaya"] #_[;]' />
                                        <LineCode text='#_[console.log(] #pink[typeof ] #_[namaBuah);] #comment[ // string]' /><br />
                                        <LineCode text='#blue[var ] #_[hoax ] #pink[= ] #pink[true] #_[;]' />
                                        <LineCode text='#_[console.log(] #pink[typeof ] #_[hoax);] #comment[ // boolean]' /><br />
                                        <LineCode text='#blue[var ] #_[array ] #pink[= ] #_[[]] #_[;]' />
                                        <LineCode text='#_[console.log(] #pink[typeof ] #_[array);] #comment[ // object]' /><br />
                                        <LineCode text='#comment[// jika suatu nama variabel belum didefinisikan, tapi kita panggil typeof nya]' />
                                        <LineCode text='#comment[// maka hasilnya menjadi undefined]' />
                                        <LineCode text='#_[console.log(] #pink[typeof ] #_[varBaru);] #comment[ // undefined]' />
                                    </code></pre>
                                </div>
                                <img className='mb-3' src="https://camo.githubusercontent.com/78d5a112c5f275f4381703a3598662637fc257f5323b30fc331e36baf0acc212/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f447573434f667958634141395f46373f666f726d61743d6a7067266e616d653d6c61726765" alt="Javascript Meme" width='100%' height='auto' />
                                <div className="note-text mb-3">
                                    <p>
                                        Catatan: Ketiga jenis variabel bisa menggunakan semua jenis tipe data yang ada di JavaScript
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataTypeJS