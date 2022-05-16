import React from 'react'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import WrapperTemplate from '../../../components/WrapperTemplate'
import data_json from "../../../data-json/java/basic/001_pendahuluan.json"


function PendahuluanJava() {
    return (
        <WrapperTemplate>
            <h2 className="title-2">Pendahuluan</h2>
            <h4 className="subtitle-h4">Menulis Program Java</h4>
            <SyntaxHighlighter code={data_json.code} />
        </WrapperTemplate>
    )
}

export default PendahuluanJava