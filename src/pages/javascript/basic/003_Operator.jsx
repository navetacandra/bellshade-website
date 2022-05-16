import React, { Fragment } from 'react'
import { OrderedList } from '../../../components/List';
import SyntaxHighlighter from '../../../components/SyntaxHighlighter';
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate';
import data_json from '../../../data-json/javascript/003_operator.json'

function OperatorJS() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className='title-2'>Operator</h2>
                {
                    data_json['text-1'].map((val, key) => (
                        <p className="section_text" key={key}>{val}</p>
                    ))
                }
            </section>
            <section className="my-5">
                <h3 className="subtitle-h3">Javascript comparison (perbandingan) operator</h3>
                <p className="section_text">Banyak jenis operasi perbandingan. Macam-macamnya yaitu:</p>
                <OrderedList>
                    {
                        data_json['comparison-operator'].map((val, key) => (
                            <Fragment key={key}>
                                {
                                    [val.title].map((val1, key1) => (
                                        <li key={key1}>
                                            <p className='section_text'>
                                                <TextStyle list_text={val1} />
                                            </p>
                                        </li>
                                    ))
                                }
                                <p className="section_text">{val.desc}</p>
                                <p className="section_text">Contoh:</p>
                                <SyntaxHighlighter code={val.code} />
                            </Fragment>
                        ))
                    }
                </OrderedList>
            </section>
            <section className="my-5">
                <h3 className="subtitle-h3">Javascript logical (logika) operator</h3>
                {
                    data_json['text-2'].map((val, key) => (
                        <p className="section_text" key={key}>{val}</p>
                    ))
                }
                <OrderedList>
                    {
                        data_json['logical-operator'].map((val, key) => (
                            <Fragment key={key}>
                                {
                                    [val.title].map((val1, key1) => (
                                        <li key={key1}>
                                            <p className='section_text'>
                                                <TextStyle list_text={val1} />
                                            </p>
                                        </li>
                                    ))
                                }
                                <p className="section_text">{val.desc}</p>
                                <p className="section_text">Contoh:</p>
                                <SyntaxHighlighter code={val.code} />
                            </Fragment>
                        ))
                    }
                </OrderedList>
            </section>
            {
                data_json['other-operator'].map((val, key) => (
                    <section key={key} className='my-5 ml-4'>
                        <h3 className="subtitle-h3">{val.title}</h3>
                        {
                            [val.desc].map((val1, key1) => (
                                <p className='section_text' key={key1}>
                                    <TextStyle list_text={val1} />
                                </p>
                            ))
                        }
                        {
                            val.note ? <div className="note-text mb-3">
                                <p>{val.note}</p>
                            </div> : null
                        }
                        <p className="section_text">Contoh:</p>
                        <SyntaxHighlighter code={val.code} />
                    </section>
                ))
            }
        </WrapperTemplate>
    )
}

export default OperatorJS