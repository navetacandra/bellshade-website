import React, { Fragment } from 'react'
import LineCode from '../../../components/LineCode'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate'
import data_json from '../../../data-json/javascript/006_perulangan.json'

function PerulanganJS() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className="title-2">Pengulangan (Looping)</h2>
                <p className="section_text">
                    Looping dalam bahasa pemrograman manapun itu melakukan tugas yang berulang berdasarkan kondisi yang diberikan.
                </p>
                <h4 className="subtitle-h4">Jenis-Jenis Looping</h4>
                <p className="section_text">
                    Dalam JavaScript terdapat beberapa fungsi looping, diantaranya:
                </p>

                <ol>
                    {
                        data_json.loop_type.map((val, key) => (
                            <div key={key} className='ml-4'>
                                <li className='list-decimal section_text'>
                                    {
                                        TextStyle({ __text__: [val.title] }).map((val1, key1) => (
                                            <span key={key1} dangerouslySetInnerHTML={val1}></span>
                                        ))
                                    }
                                </li>
                                {
                                    TextStyle({ __text__: [val.desc] }).map((val1, key1) => (
                                        <p className='section_text' key={key1} dangerouslySetInnerHTML={val1}></p>
                                    ))
                                }
                                <SyntaxHighlighter code={data_json[val.id].draft} />
                                <p className="section_text">Contoh:</p>
                                <SyntaxHighlighter code={data_json[val.id].code} />
                            </div>
                        ))
                    }
                </ol>
            </section>
            <section className='my-5'>
                <h3 className="subtitle-h3">Keyword Spesial dalam Looping</h3>
                <ol>
                    {
                        data_json.special_keyword.map((val, key) => (
                            <div key={key} className='ml-4'>
                                {
                                    TextStyle({ __text__: [val.title] }).map((val1, key1) => (
                                        <li key={key1} className='list-decimal section_text' dangerouslySetInnerHTML={val1} ></li>
                                    ))
                                }
                                {
                                    TextStyle({ __text__: val.desc }).map((val1, key1) => (
                                        <p className='section_text' dangerouslySetInnerHTML={val1} key={key1}></p>
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

export default PerulanganJS