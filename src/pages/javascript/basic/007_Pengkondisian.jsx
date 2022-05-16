import React, { Fragment } from 'react'
import { OrderedList } from '../../../components/List'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate'
import data_json from '../../../data-json/javascript/basic/007_pengkondisian.json'

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
                <OrderedList>
                    {
                        data_json.map((val, key) => (
                            <Fragment key={key}>
                                <li className='section_text'>
                                    <TextStyle list_text={val.title} />
                                </li>
                                {
                                    val.desc.map((val1, key1) => (
                                        <p className="section_text" list_text={val1}>
                                            <TextStyle key={key1} />
                                        </p>
                                    ))
                                }
                                <p className="section_text">Contoh:</p>
                                <SyntaxHighlighter code={val.code} />
                            </Fragment>
                        ))
                    }
                </OrderedList>
            </section>
        </WrapperTemplate>
    )
}

export default PengkondisianJS