import React from 'react'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate'
import data_json from '../../../data-json/javascript/007_pengkondisian.json'

function PengkondisianJS() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className="title-2">Pengkondisian</h2>
                <p className="section_text">
                    Kegunaan dari pengkondisian adalah memberi tau program blok kode mana {'yang '}
                    bisa dieksekusi/dijalankan. Dalam javascript terdapat tiga {'macam '}
                    pengkondisian, yaitu:
                </p>
                <ol className='ml-4'>
                    {
                        data_json.map((val, key) => (
                            <div key={key} className='ml-4'>
                                {
                                    TextStyle({ __text__: [val.title] }).map((val1, key1) => (
                                        <li key={key1} dangerouslySetInnerHTML={val1} className='ml-4 list-decimal section_text'></li>
                                    ))
                                }
                                {
                                    TextStyle({ __text__: val.desc }).map((val1, key1) => (
                                        <p className="section_text" key={key1} dangerouslySetInnerHTML={val1}></p>
                                    ))
                                }
                                <p className="section_text">Contoh:</p>
                                <SyntaxHighlighter code={val.code} />
                            </div>
                        ))
                    }
                </ol>
            </section>
        </WrapperTemplate>
    )
}

export default PengkondisianJS