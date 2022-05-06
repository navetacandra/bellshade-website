import React, { Fragment } from 'react'
import LineCode from '../../components/LineCode'
import TextStyle from '../../components/TextStyle'
import data_json from '../../data-json/javascript/006_perulangan.json'

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
                                    {
                                        data_json.loop_type.map((val, key) => (
                                            <Fragment key={key}>
                                                <li>
                                                    {
                                                        TextStyle({__text__: [val.title]}).map((val1, key1) => (
                                                            <span key={key1} dangerouslySetInnerHTML={val1}></span>
                                                            ))
                                                        }
                                                </li>
                                                {
                                                    TextStyle({__text__: [val.desc]}).map((val1, key1) => (
                                                        <p className='mb-3' key={key1} dangerouslySetInnerHTML={val1}></p>
                                                    ))
                                                }
                                                <div className="highlight mb-3">
                                                    <pre><code>
                                                        {
                                                            data_json[val.id].draft.map((val1, key1) => (
                                                                val1 ? <LineCode key={key1} text={val1} /> : <br key={key1} />
                                                            ))
                                                        }
                                                    </code></pre>
                                                </div>
                                                <p className="mb-3">Contoh:</p>
                                                <div className="highlight mb-3">
                                                    <pre><code>
                                                        {
                                                            data_json[val.id].code.map((val1, key1) => (
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
                            <section>
                                <h3 className="mb-4">Keyword Spesial dalam Looping</h3>
                                <ol>
                                    {
                                        data_json.special_keyword.map((val, key) => (
                                            <Fragment key={key}>
                                                {
                                                    TextStyle({__text__: [val.title]}).map((val1, key1) => (
                                                        <li key={key1} dangerouslySetInnerHTML={val1} ></li>
                                                    ))
                                                }
                                                {
                                                    TextStyle({__text__: val.desc}).map((val1, key1) => (
                                                        <p dangerouslySetInnerHTML={val1} key={key1}></p>
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

export default PerulanganJS