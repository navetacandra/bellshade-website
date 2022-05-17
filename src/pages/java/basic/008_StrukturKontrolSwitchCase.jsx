import React from "react";
import { UnorderedList } from "../../../components/List";
import SyntaxHighlighter from "../../../components/SyntaxHighlighter";
import WrapperTemplate from "../../../components/WrapperTemplate";
import data_json from "../../../data-json/java/basic/008_pengkondisian-switch-case.json";

function StrukturKontrolSwitchCase() {
    return (
        <WrapperTemplate>
            <section className="my-5">
                <h2 className="title-2">Pengkondisian If-Else</h2>
                <p className="section_text">
                    Syarat khusus pada java meliputi :
                </p>
                <UnorderedList className="section_text">
                    {
                        data_json.requirements.map((data, key) => (
                            <li key={key}>
                                <p>{data}</p>
                            </li>
                        ))
                    }
                </UnorderedList>
                <p className="section_text">
                    Contoh:
                </p>
                <SyntaxHighlighter code={data_json.code} />
            </section>
        </WrapperTemplate>
    )
};

export default StrukturKontrolSwitchCase;