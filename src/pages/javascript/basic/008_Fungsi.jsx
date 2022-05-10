import React, { Fragment } from 'react'
import LineCode from '../../../components/LineCode'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import WrapperTemplate from '../../../components/WrapperTemplate'
import data_json from '../../../data-json/javascript/008_fungsi.json'

function FungsiJS() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className="title-2">Fungsi</h2>
                <p className="section_text">
                    Function (fungsi) adalah sebuah sub-program / pecahan code yang dapat dipanggil berulang kali di manapun dan kapanpun. Function digunakan agar program yang dibuat lebih efisien dan mudah untuk dibaca, sehingga akan lebih mudah dalam menangani error.
                </p>
                <h3 className="subtitle-h3">Macam-Macam Function</h3>
                <ol className='ml-4'>
                    {
                        data_json['function-type-list'].map((val, key) => (
                            <div key={key} className='ml-4 section_text'>
                                <li className='list-decimal'>
                                    <p><strong>{val.type}</strong></p>
                                </li>
                                <p className="section_text">{val.desc}</p>
                                <SyntaxHighlighter code={val.code} />
                            </div>
                        ))
                    }
                </ol>
                <p className="section_text">
                    Function juga bisa memproses data yang dinamis, disitulah Parameter dan Argumen ada.
                </p>
                <ul className='ml-4'>
                    <li className='list-disc'>
                        <p>
                            Parameter adalah variabel yang digunakan untuk menampung nilai yang dikirimkan saat memanggil function.
                        </p>
                    </li>
                    <li className='list-disc'>
                        <p>
                            Argument adalah nilai yang dikirimkan saat function dipanggil dan akan ditampung oleh parameter.
                        </p>
                    </li>
                </ul>
                <SyntaxHighlighter code={data_json['parameter-argument-code']} />
            </section>
            <section className='my-5'>
                <h3 className="subtitle-h3">Sifat Function</h3>
                <p className="section_text">
                    Sebuah function boleh mengembalikan sebuah nilai ataupun tidak mengembalikan nilai. Jika ingin mengembalikan sebuah nilai maka gunakan perintah return.
                </p>
                <p className="section_text">
                    Dinamakan <code className="mark-text">Void Function</code> jika sebuah function tersebut tidak mengembalikan sebuah nilai{', '}
                    <code className="mark-text">Returning Function</code> ketika dia mengembalikan value.
                </p>
                <p className="section_text">Contoh:</p>
                <SyntaxHighlighter code={data_json['function-type']} />
            </section>
        </WrapperTemplate>
    )
}

export default FungsiJS