import React from 'react'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import WrapperTemplate from '../../../components/WrapperTemplate'
import data_json from '../../../data-json/javascript/basic/001_pengenalan.json'

function PengenalanJS() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className="title-2">Pengenalan Javascript</h2>
                <h4 className="subtitle-h3">Hello World</h4>
                <p className="section_text">
                    Selamat datang di bahasa pemrograman javascript. Selamat menempuh jalan ninja sebagai programmer.
                </p>
                <p className="section_text">
                    Untuk menampilkan tulisan, gunakan <code className='mark-text'>console.log</code>
                </p>
                <SyntaxHighlighter code={data_json.code} />
            </section>
        </WrapperTemplate>
    )
}

export default PengenalanJS