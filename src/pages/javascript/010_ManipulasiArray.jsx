import React from 'react'
import LineCode from '../../components/LineCode'

function ManipulasiArrayJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section className='mb-5'>
                                <h1 className="mb-4">Manipulasi Array</h1>
                                <h2 className="mb-3">Jenis Method Untuk Memanipulasi Array</h2>
                            </section>
                            <section className="mb-5" id="filter-method">
                                <ol>
                                    <h3>
                                        <li>Filter</li>
                                    </h3>
                                    <p className="mb-3">
                                        Method <code className="mark-text">.filter()</code> akan membuat sebuah array
                                        baru berisi element yang sesuai dengan kondisi yang diberikan. Method ini tidak akan mengubah array yang sebelumnya.
                                    </p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[let ] #_[result ] #pink[= ] #_[array.filter(] #blue[function] #_[(item, index) {]' />
                                            <LineCode text='#pink[    return true;]' />
                                            <LineCode text='#_[}]' />
                                        </code></pre>
                                    </div>
                                    <ul>
                                        <li><code className="mark-text">item</code>: nilai dari element yang sedang diproses</li>
                                        <li><code className="mark-text">index</code>: index dari element yang sedang diproses (optional)</li>
                                    </ul>
                                    <p className="mb-1">Contoh:</p>
                                    <p className="mb-3">
                                        Mendapatkan array berisi bilangan ganjil
                                    </p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[let ] #_[numbers ] #pink[= ] #_[[] #purple[1] #_[, ] #purple[2] #_[, ] #purple[3] #_[, ] #purple[4] #_[, ] #purple[5]' _break='no' />];<br />
                                            <LineCode text='#blue[let ] #_[oddNum ] #pink[= ] #_[array.filter(] #blue[function] #_[(number) {]' />
                                            <LineCode text='#pink[    return ] #_[number ] #pink[% ] #purple[2 ] #pink[=== ] #purple[1] #_[;]' />
                                            <LineCode text='#_[})]' /><br />
                                            <LineCode text='#_[console.log(numbers); ] #comment[// [1, 2, 3, 4, 5]]' />
                                            <LineCode text='#_[console.log(oddNum); ] #comment[// [1, 3, 5]]' />
                                        </code></pre>
                                    </div>
                                    <h3>
                                        <li>Map</li>
                                    </h3>
                                    <p className="mb-3">
                                        Method <code className="mark-text">.map()</code> akan membuat array baru berisi hasil dari operasi yang diberikan.
                                    </p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[let ] #_[result ] #pink[= ] #_[array.filter(] #blue[function] #_[(item, index) {]' />
                                            <LineCode text='#pink[    return true;]' />
                                            <LineCode text='#_[}]' />
                                        </code></pre>
                                    </div>
                                    <ul>
                                        <li><code className="mark-text">item</code>: nilai dari element yang sedang diproses</li>
                                        <li><code className="mark-text">index</code>: index dari element yang sedang diproses (optional)</li>
                                    </ul>
                                    <p className="mb-1">Contoh:</p>
                                    <p className="mb-3">
                                        Mengalikan semua nilai dalam array dengan 2
                                    </p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[let ] #_[numbers ] #pink[= ] #_[[] #purple[1] #_[, ] #purple[2] #_[, ] #purple[3] #_[, ] #purple[4] #_[, ] #purple[5]' _break='no' />];<br />
                                            <LineCode text='#blue[let ] #_[oddNum ] #pink[= ] #_[array.filter(] #blue[function] #_[(number) {]' />
                                            <LineCode text='#pink[    return ] #_[number ] #pink[* ] #purple[2] #_[;]' />
                                            <LineCode text='#_[})]' /><br />
                                            <LineCode text='#_[console.log(numbers); ] #comment[// [1, 2, 3, 4, 5]]' />
                                            <LineCode text='#_[console.log(oddNum); ] #comment[// [2, 4, 6, 8, 10]]' />
                                        </code></pre>
                                    </div>
                                    <h3>
                                        <li>Sort</li>
                                    </h3>
                                    <p className="mb-3">
                                        Method <code className="mark-text">.map()</code> akan membuat array baru berisi hasil dari operasi yang diberikan.
                                    </p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#_[array.sort()]' />
                                            <LineCode text='#_[array.sort(] #blue[function] #_[(firstEl, secondEl) {]' />
                                            <LineCode text='#_[    ...]' />
                                            <LineCode text='#_[})]' />
                                        </code></pre>
                                    </div>
                                    <ul>
                                        <li><code className="mark-text">firstEl</code>: element pertama yang akan dibandingkan</li>
                                        <li><code className="mark-text">secondEl</code>: element kedua yang akan dibandingkan</li>
                                    </ul>
                                    <p className="mb-1">Contoh:</p>
                                    <p className="mb-3"></p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[let ] #_[numbers1 ] #pink[= ] #_[[] #purple[1] #_[, ] #purple[2] #_[, ] #purple[3] #_[, ] #purple[4] #_[, ] #purple[5]' _break='no' />];<br />
                                            <LineCode text='#blue[let ] #_[numbers2 ] #pink[= ] #_[[] #purple[6] #_[, ] #purple[7] #_[, ] #purple[8] #_[, ] #purple[9] #_[, ] #purple[10]' _break='no' />];<br /><br />
                                            <LineCode text='#_[numbers1.sort()]' />
                                            <LineCode text='#_[console.log(numbers1); ] #comment[// [1, 2, 3, 4, 5]]' />
                                            <LineCode text='#_[numbers2.sort(] #blue[function] #_[(a, b) {]' />
                                            <LineCode text='#pink[    return ] #_[a ] #pink[- ] #_[b;]' />
                                            <LineCode text='#_[})]' />
                                            <LineCode text='#_[console.log(numbers2); ] #commnet[// [6, 7, 8, 9, 10]]' />
                                        </code></pre>
                                    </div>
                                    <h3>
                                        <li>Push & Pop</li>
                                    </h3>
                                    <p className="mb-3">
                                        Method <code className="mark-text">.push()</code> akan menambahkan element baru pada akhir array,
                                        sedangkan <code className="mark-text">.pop()</code> akan menghapus element terakhir dari array. Kedua method ini akan mengubah array asli.
                                    </p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#_[array.push(item1, item2, ..., itemN);]' />
                                            <LineCode text='#_[array.pop();]' />
                                        </code></pre>
                                    </div>
                                    <ul>
                                        <li><code className="mark-text">item</code>: element yang akan ditambahkan ke array</li>
                                    </ul>
                                    <p className="mb-1">Contoh:</p>
                                    <p className="mb-3"></p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[let ] #_[numbers ] #pink[= ] #_[[] #purple[1] #_[, ] #purple[2] #_[, ] #purple[3] #_[, ] #purple[4] #_[, ] #purple[5] #_[];]' /><br />
                                            <LineCode text='#_[numbers.push(] #purple[6] #_[); ] #comment[// menambahkan angka 6 ke array numbers]' />
                                            <LineCode text='#_[console.log(numbers); ] #comment[// [1, 2, 3, 4, 5, 6]]' />
                                            <LineCode text='#_[numbers.pop(); ] #comment[// menghapus item terakhir dari array numbers]' />
                                            <LineCode text='#_[console.log(numbers); ] #comment[// [1, 2, 3, 4, 5]]' />
                                        </code></pre>
                                    </div>
                                    <h3>
                                        <li>Shift & Unshift</li>
                                    </h3>
                                    <p className="mb-3">
                                        Method <code className="mark-text">.unshift()</code> akan menambahkan element baru pada awal array,
                                        sedangkan <code className="mark-text">.shift()</code> akan menghapus element pertama dari array. Kedua method ini akan mengubah array asli.
                                    </p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#_[array.unshift(item1, item2, ..., itemN);]' />
                                            <LineCode text='#_[array.shift();]' />
                                        </code></pre>
                                    </div>
                                    <ul>
                                        <li><code className="mark-text">item</code>: element yang akan ditambahkan ke array</li>
                                    </ul>
                                    <p className="mb-1">Contoh:</p>
                                    <p className="mb-3"></p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[let ] #_[numbers ] #pink[= ] #_[[] #purple[1] #_[, ] #purple[2] #_[, ] #purple[3] #_[, ] #purple[4] #_[, ] #purple[5] #_[];]' /><br />
                                            <LineCode text='#_[numbers.unshift(] #purple[-1] #_[, ] #purple[0] #_[); ] #comment[// menambahkan angka -1 dan 0 ke array numbers]' />
                                            <LineCode text='#_[console.log(numbers); ] #comment[// [-1, 0, 1, 2, 3, 4, 5]]' /><br />
                                            <LineCode text='#_[numbers.shift(); ] #comment[// menghapus item pertama dari array numbers]' />
                                            <LineCode text='#_[console.log(numbers); ] #comment[// [0, 1, 2, 3, 4, 5]]' />
                                        </code></pre>
                                    </div>
                                    <h3>
                                        <li>Reduce</li>
                                    </h3>
                                    <p className="mb-3">
                                        Method <code className="mark-text">.reduce()</code> akan menjalankan fungsi pada setiap
                                        element dimana pada setiap iterasinya menggunakan hasil return dari iterasi sebelumnya.
                                    </p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[const ] #_[numbers ] #pink[= ] #_[[] #purple[1] #_[, ] #purple[2] #_[, ] #purple[3] #_[, ] #purple[4] #_[, ] #purple[5] #_[];]' /><br />
                                            <LineCode text='#blue[const ] #_[totalNumber ] #pink[= ] #_[numbers.reduce(] #blue[function] #_[(akumulator, number) {]' />
                                            <LineCode text='#pink[    return ] #_[akumulator ] #pink[+ ] #_[number;]' />
                                            <LineCode text='#_[})]' />
                                            <LineCode text='#comment[// untuk setiap elemen akan menjalankan fungsi menambahkan akumulator dengan nilai dirinya]' />
                                            <LineCode text='#comment[// akumulator adalah nilai dari perhitungan semua elemen sebelumnya]' />
                                            <LineCode text='#_[console.log(totalNumber); ] #comment[// 15]' />
                                        </code></pre>
                                    </div>
                                    <p className="mb-2">
                                        dalam contoh di atas nilai awal akumulator secara default adalah 0, sehingga:
                                    </p>
                                    <ul>
                                        <li>0 + <code className="mark-text">1</code> = 1</li>
                                        <li>1 + <code className="mark-text">2</code> = 3</li>
                                        <li>3 + <code className="mark-text">3</code> = 6</li>
                                        <li>6 + <code className="mark-text">4</code> = 10</li>
                                        <li>10 + <code className="mark-text">5</code> = 15 (nilai totalNumber menjadi 15)</li>
                                    </ul>
                                    <p className="mb-1">Contoh:</p>
                                    <p className="mb-3">
                                        Nilai awal akumulator dapat ditentukan pada parameter kedua method <code className="mark-text">.reduce()</code>
                                    </p>
                                    <div className="highlight">
                                        <pre><code>
                                            <LineCode text='#blue[const ] #_[numbers ] #pink[= ] #_[[] #purple[1] #_[, ] #purple[2] #_[, ] #purple[3] #_[, ] #purple[4] #_[, ] #purple[5]' _break='no' />];<br /><br />
                                            <LineCode text='#blue[const ] #_[totalNumber ] #pink[= ] #_[numbers.reduce(] #blue[function] #_[(akumulator, number) {]' />
                                            <LineCode text='#pink[    return ] #_[akumulator ] #pink[+ ] #_[number;]' />
                                            <LineCode text='#_[}, ] #purple[100] #_[)]' />
                                            <LineCode text='#comment[// parameter kedua (nilai awal akumulator) diberi nilai 100 sehingga perhitungan dimulai dari 100]' /><br />
                                            <LineCode text='#_[console.log(totalNumber); ] #comment[// 115]' />
                                            <LineCode text='#comment[// nilai totalNumber menjadi 115]' />
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

export default ManipulasiArrayJS