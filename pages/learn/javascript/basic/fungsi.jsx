import { Fragment } from 'react';
import Layout from '@/components/Template/Layout'
import WrapperTemplate from '@/components/Template/WrapperTemplate'
import OrderedList from '@/components/List/OrderedList'
import UnorderedList from '@/components/List/UnorderedList'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'
import data_json from '@/data-json/javascript/basic/008_fungsi.json'

export default function Page() {
    return (    
        <Layout pageTitle="Bellshade | Javascript - Fungsi">
            <WrapperTemplate>
                <section className='my-5'>
                    <h2 className="title-2">Fungsi</h2>
                    <p className="section_text">
                        Function (fungsi) adalah sebuah sub-program / pecahan code yang dapat dipanggil berulang kali di manapun dan kapanpun. Function digunakan agar program yang dibuat lebih efisien dan mudah untuk dibaca, sehingga akan lebih mudah dalam menangani error.
                    </p>
                    <h3 className="subtitle-h3">Macam-Macam Function</h3>
                    <OrderedList className='section_text'>
                        {
                            data_json['function-type-list'].map((val, key) => (
                                <Fragment key={key}>
                                    <li>
                                        <p><strong>{val.type}</strong></p>
                                    </li>
                                    <p className="section_text">{val.desc}</p>
                                    <SyntaxHighlighter code={val.code} />
                                </Fragment>
                            ))
                        }                    </OrderedList>
                    <p className="section_text">
                        Function juga bisa memproses data yang dinamis, disitulah Parameter dan Argumen ada.
                    </p>
                    <UnorderedList className='section_text'>
                        <li>
                            <p>
                                Parameter adalah variabel yang digunakan untuk menampung nilai yang dikirimkan saat memanggil function.
                            </p>
                        </li>
                        <li>
                            <p>
                                Argument adalah nilai yang dikirimkan saat function dipanggil dan akan ditampung oleh parameter.
                            </p>
                        </li>
                    </UnorderedList>
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
        </Layout>
    )
}