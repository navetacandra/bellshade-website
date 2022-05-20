import OrderedList from '@/components/List/OrderedList'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'
import Layout from '@/components/Template/Layout'
import WrapperTemplate from '@/components/Template/WrapperTemplate'
import TextStyle from '@/components/TextStyle'
import { Fragment } from 'react'
import data_json from '@/data-json/java/basic/009_perulangan-while.json'

export default function Page() {
    return (
        <Layout pageTitle='Bellshade | Java - Perulangan While'>
            <WrapperTemplate>
                <section className="my-5">
                    <h2 className="title-2">Looping (Perulangan)</h2>
                    <p className="section_text">
                        Looping atau dalam bahasa Indonesia nya adalah Perulangan adalah suatu fungsi pada bahasa pemrograman yang digunakan untuk melakukan eksekusi secara berulang sesuai kondisi yang diinginkan atau terpenuhi.Looping juga merupakan sebuah metode untuk mengerjakan perintah yang berulang-ulang.
                    </p>
                </section>
                <section className="my-5">
                    <OrderedList>
                        {/************************************* For Loop *************************************/}
                        <Fragment id="for">
                            <li>
                                <p className='section_text'>
                                    <TextStyle list_text='#mark_code[for]' />
                                </p>
                            </li>
                            <p id="for_desc" className="section_text">
                                <TextStyle list_text='Looping atau Perulangan #mark_code[for] (beberapa orang menyebutnya <i>counted loop</i>) merupakan perulangan yang akan melakukan eksekusi perintah yang telah diketahui jumlah banyaknya. Sehingga perulangan #mark_code[for] akan melakukan perulangan kode sejumlah tertentu. Perulangan ini terstruktur untuk mengulangi kode sampai tercapai batas yang telah ditentukan.' />
                            </p>
                            <SyntaxHighlighter code={data_json.for.draft} />
                            <p className="section_text">Contoh:</p>
                            <SyntaxHighlighter code={data_json.for.code} />
                        </Fragment>
                        {/************************************* For Loop *************************************/}
                    </OrderedList>
                </section>
            </WrapperTemplate>
        </Layout>
    )
}