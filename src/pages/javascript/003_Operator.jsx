import React, { Fragment } from 'react'
import LineCode from '../../components/LineCode';
import TextStyle from '../../components/TextStyle'
import data_json from '../../data-json/javascript/003_operator.json'

function OperatorJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section className="mb-5">
                                <h2 className='mb-3'>Operator</h2>
                                {
                                    data_json['text-1'].map((val, key) => (
                                        <p className="mb-3" key={key}>{val}</p>
                                    ))
                                }
                            </section>
                            <section className="mb-5">
                                <h3 className="mb-3">Javascript comparison (perbandingan) operator</h3>
                                <p className="mb-3">Banyak jenis operasi perbandingan. Macam-macamnya yaitu:</p>
                                <ol>
                                    {
                                        data_json['comparison-operator'].map((val, key) => (
                                            <Fragment key={key}>
                                                <li>
                                                    {
                                                        TextStyle({ __text__: [val.title] }).map((val1, key1) => (
                                                            <p key={key1} dangerouslySetInnerHTML={val1} ></p>
                                                        ))
                                                    }
                                                </li>
                                                <p className="mb-3">{val.desc}</p>
                                                <p className="mb-3">Contoh:</p>
                                                <div className="highlight mb-3">
                                                    <pre><code>
                                                        {
                                                            val.code.map((val1, key1) => (
                                                                val1 ? <LineCode text={val1} key={key1} /> : <br key={key1} />
                                                            ))
                                                        }
                                                    </code></pre>
                                                </div>
                                            </Fragment>
                                        ))
                                    }
                                </ol>
                            </section>
                            <section className="mb-5">
                                <h3 className="mb-3">Javascript logical (logika) operator</h3>
                                {
                                    data_json['text-2'].map((val, key) => (
                                        <p className="mb-3" key={key}>{val}</p>
                                    ))
                                }
                                <ol>
                                    {
                                        data_json['logical-operator'].map((val, key) => (
                                            <Fragment key={key}>
                                                <li>
                                                    {
                                                        TextStyle({ __text__: [val.title] }).map((val1, key1) => (
                                                            <p key={key1} dangerouslySetInnerHTML={val1} ></p>
                                                        ))
                                                    }
                                                </li>
                                                <p className="mb-3">{val.desc}</p>
                                                <p className="mb-3">Contoh:</p>
                                                <div className="highlight mb-3">
                                                    <pre><code>
                                                        {
                                                            val.code.map((val1, key1) => (
                                                                val1 ? <LineCode text={val1} key={key1} /> : <br key={key1} />
                                                            ))
                                                        }
                                                    </code></pre>
                                                </div>
                                            </Fragment>
                                        ))
                                    }
                                </ol>
                            </section>
                            {
                                data_json['other-operator'].map((val, key) => (
                                    <section key={key}>
                                        <h3 className="mb-3">{val.title}</h3>
                                        {
                                            TextStyle({ __text__: [val.desc] }).map((val1, key1) => (
                                                <p className="mb-3" dangerouslySetInnerHTML={val1} key={key1}></p>
                                            ))
                                        }
                                        {
                                            val.note ? <div className="note-text mb-3">
                                                <p>{val.note}</p>
                                            </div> : null
                                        }
                                        <p className="mb-3">Contoh:</p>
                                        <div className="highlight">
                                            <pre><code>
                                                {
                                                    val.code.map((val1, key1) => (
                                                        val1 ? <LineCode text={val1} key={key1} /> : <br key={key1} />
                                                    ))
                                                }
                                            </code></pre>
                                        </div>
                                    </section>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OperatorJS