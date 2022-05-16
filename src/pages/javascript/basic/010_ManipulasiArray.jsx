import React, { Fragment } from 'react'
import data_json from '../../../data-json/javascript/010_manipulasi-array.json'
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import { OrderedList, UnorderedList } from '../../../components/List'

function ManipulasiArrayJS() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className="title-2">Manipulasi Array</h2>
                <h3 className="subtitle-h3">Jenis Method Untuk Memanipulasi Array</h3>
            </section>
            <section className="my-5">
                <OrderedList>
                    {
                        data_json.map((data, i) => (
                            <Fragment key={i}>
                                <h4 className='subtitle-h4 ml-3'>
                                    <li>{data.title}</li>
                                </h4>
                                {
                                    data.desc.map((val, key) => (
                                        <p className="section_text" key={key}>
                                            <TextStyle list_text={val} />
                                        </p>
                                    ))
                                }
                                <SyntaxHighlighter code={data.draft} />
                                {
                                    data.desc_1 ? (
                                        data.desc_1.map((val, key) => (
                                            <p className="section_test" key={key}>
                                                <TextStyle list_text={val} />
                                            </p>
                                        ))
                                    ) : null
                                }
                                <UnorderedList className='my-3'>
                                    {
                                        data.list.map((val, key) => (
                                            <li key={key}>
                                                <p className="section_text">
                                                    <TextStyle list_text={val} />
                                                </p>
                                            </li>
                                        ))
                                    }
                                </UnorderedList>
                                <p className="section_text">Contoh:</p>
                                {
                                    data.desc_2 ? (
                                        data.desc.map((val, key) => (
                                            <p className="section_text" key={key}>
                                                <TextStyle list_text={val} />
                                            </p>
                                        ))
                                    ) : null
                                }
                                <SyntaxHighlighter code={data.code} />
                            </Fragment>
                        ))
                    }
                </OrderedList>
            </section>
        </WrapperTemplate>
    )
}

export default ManipulasiArrayJS