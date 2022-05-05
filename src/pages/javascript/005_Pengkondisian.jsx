import React from 'react'
import LineCode from '../../components/LineCode'

function PengkondisianJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section>
                                <h2 className="mb-4">Pengkondisian</h2>
                                <p className="mb-3">
                                    Kegunaan dari pengkondisian adalah memberi tau program blok kode mana {'yang '}
                                    bisa dieksekusi/dijalankan. Dalam javascript terdapat tiga {'macam '}
                                    pengkondisian, yaitu:
                                </p>
                                <ol>
                                    <li>
                                        <code className="mark-text">
                                            if
                                        </code>
                                    </li>
                                    <p className="mb-3">
                                        Di dalam bahasa pemrograman javascript ada sebuah cara di mana {'kita '}
                                        bisa mengeksekusi sebuah kode, jika syarat yang kita tentukan {'sudah '}
                                        terpenuhi (<code className="mark-text">true</code>) yakni {'dengan '}
                                        menggunakan statement if biasanya syarat di if statement {'menggunakan '}
                                        comparison (perbandingan) operator ataupun logical (logika) {'operator '}
                                        kode yang di dalam if statement akan dieksekusi hanya jika {'syarat '}
                                        mengeluarkan nilai <code className="mark-text">true</code>.
                                    </p>
                                    <p className="mb-3">Contoh:</p>
                                    <div className="highlight mb-3">
                                        <pre><code>
                                            <LineCode text='#pink[if] #_[(] #pink[true] #_[) {]' />
                                            <LineCode text='#_[    console.log(] #yellow["Kode ini pasti dijalankan"] #_[);]' />
                                            <LineCode text='#_[}]' />
                                        </code></pre>
                                    </div>
                                    <li>
                                        <code className="mark-text">
                                            else
                                        </code>
                                    </li>
                                    <p className="mb-3">
                                        Javascript juga memiliki sebuah cara untuk mengeksekusi sebuah {'kode '}
                                        jika syarat yang kita tentukan tidak terpenuhi (
                                        <code className="mark-text">false</code>) yakni dengan {'menggunakan '}
                                        statement else jika kode di dalam if tidak dieksekusi karena {'syarat '}
                                        tidak terpenuhi atau mengeluarkan nilai false, maka kode di dalam {'blok '}
                                        else akan dieksekusi.
                                    </p>
                                    <p className="mb-3">Contoh:</p>
                                    <div className="highlight mb-3">
                                        <pre><code>
                                            <LineCode text='#pink[if] #_[(] #pink[false] #_[) {]' />
                                            <LineCode text='#_[    console.log(] #yellow["Kode ini tidak akan pernah dijalankan"] #_[);]' />
                                            <LineCode text='#_[} ] #pink[else ] #_[{]' />
                                            <LineCode text='#_[    console.log(] #yellow["Kode ini pasti dijalankan"] #_[);]' />
                                            <LineCode text='#_[}]' />
                                        </code></pre>
                                    </div>
                                    <li>
                                        <code className="mark-text">
                                            else if
                                        </code>
                                    </li>
                                    <p className="mb-3">
                                        Ada metode lain untuk melakukan pengecekan ber-urut yakni dengan {'else '}
                                        if. Jika blok if pertama bernilai false, maka kode akan {'melakukan '}
                                        pengecekan dengan syarat kedua di blok else if. Jika syarat {'kedua '}
                                        bernilai true, maka blok else if akan dijalankan.
                                    </p>
                                    <p className="mb-3">Contoh:</p>
                                    <div className="highlight mb-3">
                                        <pre><code>
                                            <LineCode text='#blue[const ] #_[tanggal ] #pink[= ] #purple[10] #_[;]' /><br />
                                            <LineCode text='#pink[if] #_[(tanggal ] #pink[< ] #purple[5] #_[) {]' />
                                            <LineCode text='#_[    console.log(] #yellow["Kode ini tidak akan pernah dijalankan"] #_[);]' />
                                            <LineCode text='#_[} ] #pink[else if] #_[(tanggal ] #pink[> ] #purple[8] #_[) {]' />
                                            <LineCode text='#_[    console.log(] #yellow["Kode ini pasti dijalankan"] #_[);]' />
                                            <LineCode text='#_[} ] #pink[else ] #_[{]' />
                                            <LineCode text='#_[    console.log(] #yellow["Kode ini tidak akan pernah dijalankan"] #_[);]' />
                                            <LineCode text='#_[}]' />
                                        </code></pre>
                                    </div>
                                    <li>
                                        <code className="mark-text">
                                            switch case
                                        </code>
                                    </li>
                                    <p className="mb-3">
                                        Ada alternatif lain untuk melakukan pengecekan ber-urut yaitu {'dengan '}
                                        switch case. Kita bisa menentukan variabel mana yang akan kita {'cek, '}
                                        lalu tambahkan beberapa case di bawahnya untuk mengecek isi {'dari '}
                                        variabel yang kita tentukan di dalam switch tadi. Kita juga {'bisa '}
                                        memberikan kondisi default sama halnya dengan else di atas.
                                    </p>
                                    <p className="mb-3">Contoh:</p>
                                    <div className="highlight mb-3">
                                        <pre><code>
                                            <LineCode text='#blue[const ] #_[buah ] #pink[= ] #yellow["Jeruk"] #_[;]' /><br />
                                            <LineCode text='#pink[switch] #_[(buah) {]' />
                                            <LineCode text='#pink[    case ] #yellow["Apel"] #pink[:]' />
                                            <LineCode text='#_[        console.log(] #yellow["Kode ini tidak akan pernah dijalankan"] #_[);]' />
                                            <LineCode text='#pink[        break;]' />
                                            <LineCode text='#pink[    case ] #yellow["Nanas"] #pink[:]' />
                                            <LineCode text='#_[        console.log(] #yellow["Kode ini tidak akan pernah dijalankan"] #_[);]' />
                                            <LineCode text='#pink[        break;]' />
                                            <LineCode text='#pink[    default:]' />
                                            <LineCode text='#_[        console.log(] #yellow["Kode ini pasti dijalankan"] #_[);]' />
                                            <LineCode text='#pink[        break;]' />
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

export default PengkondisianJS