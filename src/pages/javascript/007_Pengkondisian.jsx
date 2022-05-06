import React, { Fragment } from 'react'
import LineCode from '../../components/LineCode'
import TextStyle from '../../components/TextStyle'
import data_json from '../../data-json/javascript/007_pengkondisian.json'

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
                                    {
                                        data_json.map((val, key) => (
                                            <Fragment key={key}>
                                                {
                                                    TextStyle({__text__: [val.title]}).map((val1, key1) => (
                                                        <li key={key1} dangerouslySetInnerHTML={val1}></li>
                                                    ))
                                                }
                                                {
                                                    TextStyle({__text__: val.desc}).map((val1, key1) => (
                                                        <p className="mb-3" key={key1} dangerouslySetInnerHTML={val1}></p>
                                                    ))
                                                }
                                                <p className="mb-3">Contoh:</p>
                                                <div className="highlight">
                                                    <pre><code>
                                                        {
                                                            val.code.map((val1, key1) => (
                                                                val1 ? <LineCode key={key1} text={val1} /> : <br key={key1} />
                                                            ))
                                                        }
                                                    </code></pre>
                                                </div>
                                            </Fragment>
                                        ))
                                    }
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