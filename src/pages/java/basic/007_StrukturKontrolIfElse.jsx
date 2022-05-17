import React, { Fragment } from "react";
import { OrderedList } from "../../../components/List";
import SyntaxHighlighter from "../../../components/SyntaxHighlighter";
import TextStyle from "../../../components/TextStyle";
import WrapperTemplate from "../../../components/WrapperTemplate";
import data_json from  "../../../data-json/java/basic/007_pengkondisian-if-else.json";

function StrukturKontrolIfElse() {
    return (
        <WrapperTemplate>
            <section className="my-5">
                <h2 className="title-2">Pengkondisian If-Else</h2>
                <OrderedList>
                    {
                        data_json.map((val, key) => (
                            <Fragment key={key}>
                                <li className='section_text'>
                                    <TextStyle list_text={val.title} />
                                </li>
                                {
                                    val.desc.map((val1, key1) => (
                                        <p className="section_text" key={key1}>
                                            <TextStyle list_text={val1} />
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
};

export default StrukturKontrolIfElse;