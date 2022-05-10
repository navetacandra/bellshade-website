import React from 'react'
import LineCode from '../../../components/LineCode'
import data_json from '../../../data-json/javascript/009_konsep-array.json'
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'

function KonsepArrayJS() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className="title-2">Belajar Penggunaan Array di Javascript</h2>
            </section>
            {
                data_json.map((val, key) => (
                    <section className='my-5' key={key}>
                        <h4 className="subtitle-h4">{val.title}</h4>
                        {
                            TextStyle({ __text__: [val.desc] }).map((el, key1) => (
                                <p className="section_text" key={key1} dangerouslySetInnerHTML={el}></p>
                            ))
                        }
                        {
                            val.note ? (
                                <div className="note-text mb-3">
                                    <p>{val.note}</p>
                                </div>
                            ) : null
                        }
                        <p className="section_text">Contoh:</p>
                        <SyntaxHighlighter code={val.code} />
                    </section>
                ))
            }
        </WrapperTemplate>
    )
}

export default KonsepArrayJS