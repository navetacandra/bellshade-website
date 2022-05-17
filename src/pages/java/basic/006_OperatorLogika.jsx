import React, { Fragment } from "react";
import { OrderedList } from "../../../components/List";
import SyntaxHighlighter from "../../../components/SyntaxHighlighter";
import TextStyle from "../../../components/TextStyle";
import WrapperTemplate from "../../../components/WrapperTemplate";
import data_json from "../../../data-json/java/basic/006_operator-logika.json"

function BooleanOperator() {
    return (
        <WrapperTemplate>
            <section className="my-5">
                <h2 className="title-2">Java operator boolean (logika)</h2>
                <p className="section_text">
                    Logika secara harfiahnya adalah hasil pertimbangan dari akal dan pikiran seseorang, disampaikan dan diutarakan dengan bahasa.
                </p>
                <p className="section_text">
                    Penggunaan logika di seluruh bahasa pemrograman itu selalu ada. Dalam Java ada 3 operator dalam urusan kelogisan suatu yang dapat menghasilkan keputusan pasti yang hasilnya berupa true atau false, yaitu:
                </p>
                <OrderedList>
                    {
                        data_json.map((val, key) => (
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
        </WrapperTemplate>
    )
};

export default BooleanOperator;