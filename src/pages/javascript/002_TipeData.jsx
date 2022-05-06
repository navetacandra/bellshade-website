import React, { Fragment } from 'react'
import LineCode from '../../components/LineCode'
import TextStyle from '../../components/TextStyle'
import data_json from '../../data-json/javascript/002_data-type.json'

function DataTypeJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section>
                                <h2 className="mb-4">Variabel dan Tipe Data</h2>
                                {
                                    data_json['text-1'].map((val, key) => (
                                        <p className="mb-3">{val}</p>
                                    ))
                                }
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
                                        {
                                            data_json['variabel-declare-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
                                    </code></pre>
                                </div>
                                <h4 className="mb-3">Jenis-Jenis Tipe Data</h4>
                                <p className="mb-3">
                                    Untuk tipe data, JavaScript memiliki banyak tipe data, kali ini membahas 3 tipe data dasar yang sering digunakan, yaitu:
                                </p>
                                <ol>
                                    {
                                        data_json['data-type'].map((val, key) => (
                                            <Fragment key={key}>
                                                <li>
                                                    <code className="mark-text">
                                                        {val.type}
                                                    </code>
                                                </li>
                                                {
                                                    TextStyle({ __text__: val.desc }).map((val1, key1) => {
                                                        return (
                                                        <p className="mb-3" key={key1} dangerouslySetInnerHTML={val1} ></p>
                                                    )
                                                    })
                                                }
                                            </Fragment>
                                        ))
                                    }
                                </ol>
                                <div className="highlight mb-3">
                                    <pre><code>
                                        {
                                            data_json['data-type-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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
                                        {
                                            data_json['typeof-code'].map((val, key) => (
                                                val ? <LineCode key={key} text={val} /> : <br key={key} />
                                            ))
                                        }
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