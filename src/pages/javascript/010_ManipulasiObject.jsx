import React from 'react'
import LineCode from '../../components/LineCode'

function ManipulasiObjectJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section>
                                <h2 className="mb-4">Method-Method untuk Memanipulasi Object</h2>
                                <h4 className="mb-3">Object.keys()</h4>
                                <p className="mb-3">
                                    Method ini mengembalikan sebuah array yang berisi kumpulan key dari object yang diberikan. Parameter yang diterima adalah sebuah object.
                                </p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[const ] #_[person ] #pink[= ] #_[{]' />
                                        <LineCode text='#_[    nama] #pink[: ] #yellow["John Doe"] #_[,]' />
                                        <LineCode text='#_[    age] #pink[: ] #purple[24] #_[,]' />
                                        <LineCode text='#_[    gender] #pink[: ] #yellow["male"]' />
                                        <LineCode text='#_[};]' /><br />
                                        <LineCode text='#_[console.log(] #blue[Object] #_[.keys(person)); ]' _break='no' />
                                        <span className="comment">// ["name", "age", "gender"]</span>
                                    </code></pre>
                                </div>

                                <h4 className="mb-3">Object.values()</h4>
                                <p className="mb-3">
                                    Method ini mengembalikan sebuah array yang berisi kumpulan value dari object yang diberikan. Parameter yang diterima adalah sebuah object.
                                </p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[const ] #_[person ] #pink[= ] #_[{]' />
                                        <LineCode text='#_[    nama] #pink[: ] #yellow["John Doe"] #_[,]' />
                                        <LineCode text='#_[    age] #pink[: ] #purple[24] #_[,]' />
                                        <LineCode text='#_[    gender] #pink[: ] #yellow["male"]' />
                                        <LineCode text='#_[};]' /><br />
                                        <LineCode text='#_[console.log(] #blue[Object] #_[.values(person)); ]' _break='no' />
                                        <span className="comment">// ["John Doe", 24, "male"]</span>
                                    </code></pre>
                                </div>

                                <h4 className="mb-3">Object.entries()</h4>
                                <p className="mb-3">
                                    Method ini mengembalikan array yang berpasangan antara key dan value dari object yang diberikan. Parameter yang diterima adalah sebuah object.
                                </p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[const ] #_[person ] #pink[= ] #_[{]' />
                                        <LineCode text='#_[    nama] #pink[: ] #yellow["John Doe"] #_[,]' />
                                        <LineCode text='#_[    age] #pink[: ] #purple[24] #_[,]' />
                                        <LineCode text='#_[    gender] #pink[: ] #yellow["male"]' />
                                        <LineCode text='#_[};]' /><br />
                                        <LineCode text='#_[console.log(] #blue[Object] #_[.entries(person)); ]' _break='no' />
                                        <span className="comment">// [["name", "John Doe"], ["age", 24], ["gender", "male"]]</span>
                                    </code></pre>
                                </div>

                                <h4 className="mb-3">Object.assign()</h4>
                                <p className="mb-3">
                                Method menggabungkan dua object atau lebih menjadi satu dan mengembalikan object yang sudah digabung, serta mengubah object target menjadi object gabungan tadi. Parameter yang diterima adalah beberapa object dengan urutan sebagai 
                                berikut: <code className="mark-text">Object.assign(target, source1, source2, source3, ...)</code>
                                </p>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        <LineCode text='#blue[const ] #_[object1 ] #pink[= ] #_[{]' />
                                        <LineCode text='#_[    firstName] #pink[: ] #yellow["Brendan"] #_[,]' />
                                        <LineCode text='#_[};]' />
                                        <LineCode text='#blue[const ] #_[object2 ] #pink[= ] #_[{]' />
                                        <LineCode text='#_[    lastName] #pink[: ] #yellow["Eich"] #_[,]' />
                                        <LineCode text='#_[};]' /><br />
                                        <LineCode text='#_[console.log(] #blue[Object] #_[.assign(object1, object2)); ] #comment[// {firstName: "Brendan", lastName: "Eich"}]' _break='no' />
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

export default ManipulasiObjectJS