import React from 'react';
import SyntaxHighlighter from '../../../components/SyntaxHighlighter';
import data_json from "../../../data-json/java/basic/003_data-casting.json";

function DataCasting() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-warp">
                <div className="self-center w-full px-5 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white my-10 shadow-lg">
                    <section className='my-5'>
                        <h2 className="title-2">Data Casting</h2>
                        <p className="section_text">
                            Data Casting (atau biasa disebut type casting) adalah salah satu teknik dimana merubah tipe data primitif tipe data primitif lainnya.
                        </p>
                    </section>
                    {
                            data_json.map((data, i) => (
                                <section className='my-5' key={i}>
                                    <h3 className="subtitle-h3">{data.title}</h3>
                                    <p className="section_text">{data.desc}</p>
                                    <div className="note-text">
                                        <p>{data.notes}</p>
                                    </div>
                                    {
                                        data.code && !!data.code.length ? (
                                            <SyntaxHighlighter code={data.code} />
                                        ) : null
                                    }
                                </section>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default DataCasting