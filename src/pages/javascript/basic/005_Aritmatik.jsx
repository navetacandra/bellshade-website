import React from 'react'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import WrapperTemplate from '../../../components/WrapperTemplate'
import data_json from '../../../data-json/javascript/005_aritmatik.json'

function ArithmeticJS() {
    return (
        <WrapperTemplate>
            <section className="my-5">
                <h2 className="title-2">Operasi Aritmatika pada Javascript</h2>
                <p className="section_text">
                    Aritmatika atau biasa disebut penghitungan merupakan cabang matematika yang mempelajari operasi dasar bilangan seperti penjumlahan, pengurangan, perkalian, pembagian, dan sebagainya.
                </p>
                <p className="section_text">
                    Setiap bahasa pemrograman termasuk javascript memiliki operator aritmatika untuk melakukan penghitungan dasar. Dalam Javascript sendiri terdapat beberapa operator yaitu :
                </p>
            </section>
            {
                data_json.map((data, i) => (
                    <section className="my-5" key={i}>
                        <h4 className="subtitle-h4">{data.title}</h4>
                        <p className="section_text">{data.desc}</p>
                        {data.note ? (
                            <div className="note-text">
                                <p>{data.note}</p>
                            </div>
                        ) : null}
                        <p className="section_text">Contoh:</p>
                        <SyntaxHighlighter code={data.code} />
                    </section>
                ))
            }
        </WrapperTemplate>
    )
}

export default ArithmeticJS