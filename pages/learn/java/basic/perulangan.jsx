import OrderedList from '@/components/List/OrderedList'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'
import Layout from '@/components/Template/Layout'
import WrapperTemplate from '@/components/Template/WrapperTemplate'
import TextStyle from '@/components/TextStyle'
import { Fragment } from 'react'
import data_json from '@/data-json/java/basic/009_perulangan-while.json'
import UnorderedList from '@/components/List/UnorderedList'

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
                            <p className="section_text">
                            ket: Dari contoh diatas, jika hanya satu pernyataan yang hendak diulang, maka diperbolehkan tidak memakai pasangan kurung kurawal. Perulangan for mengulangi statement sejumlah tertentu menggunakan:
                            </p>
                            <UnorderedList className='section_text my-3'>
                                <li className='my-2'>
                                    <TextStyle list_text="#mark_code[nilai_awal] untuk deklarasi variabel kendali perulangan atau menginisialisasi nilai awal dimana menjadi titik awal perulangan dimulai" />
                                </li>
                                <li className='my-2'>
                                    <TextStyle list_text="#mark_code[kondisi] untuk membandingkan variabel kendali perulangan dengan nilai batas dengan memberikan kondisi tertentu" />
                                </li>
                                <li className='my-2'>
                                    <TextStyle list_text="#mark_code[modifier] untuk menspesifikasikan cara variabel kendali dimodifikasi sebelum iterasi berikutnya atau bagian untuk memberikan penambahan nilai atau pengurangan Jika semua sudah terpenuhi, maka program mengeluarkan output langsung dari <i>syntax</i> #mark_code[Statement;]" />
                                </li>
                            </UnorderedList>
                            <SyntaxHighlighter code={data_json.for.draft} />
                            <p className="section_text">Contoh:</p>
                            <SyntaxHighlighter code={data_json.for.code} />
                        </Fragment>
                        {/************************************* For Loop *************************************/}
                        {/************************************* While Loop *************************************/}
                        <Fragment id="while">
                            <li>
                                <p className='section_text'>
                                    <TextStyle list_text='#mark_code[while]' />
                                </p>
                            </li>
                            <p id="while_desc" className="section_text">
                                <TextStyle list_text='Looping atau Perulangan #mark_code[while] (beberapa orang menyebutnya <i>uncounted loop</i>) adalah perulangan yang digunakan untuk mengulang suatu perintah perulangan yang belum diketahui jumlahnya. Perulangan #mark_code[while] akan terus dijalankan selama kondisi yang dieksekusi bernilai true. Perulangan while juga digunakan untuk perulangan yang memiliki kondisi dan tidak tentu berapa banyak perulangannya.' />
                            </p>
                            <SyntaxHighlighter code={data_json.while.draft} />
                            <div className="note-text">
                                <p>
                                    <TextStyle list_text='ket: Jika #mark_code[kondisi] bernilai <i>true</i>, maka #mark_code[Statement;] akan terus dieksekusi dan proses akan berlanjut diulangi terus menerus. Tetapi, jika #mark_code[kondisi] berada sebelum badan pernyataan. Sehingga ketika #mark_code[kondisi] sejak awal bernilai <i>false</i>, maka #mark_code[Statement;] tidak akan dieksekusi.' />
                                </p>
                            </div>
                            <p className="section_text">Contoh:</p>
                            <SyntaxHighlighter code={data_json.while.code} />
                        </Fragment>
                        {/************************************* For Loop *************************************/}
                    </OrderedList>
                </section>
            </WrapperTemplate>
        </Layout>
    )
}