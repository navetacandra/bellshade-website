import React from 'react'
import { OrderedList } from '../../components/List'
import TextStyle from '../../components/TextStyle'
import data_json from '../../data-json/javascript/000_welcome.json'

function WelcomeJS() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-warp">
                <div className="self-center w-full px-5 bg-white border border-gray-300 rounded-lg my-10 shadow-xl dark:bg-slate-800 dark:border-slate-900">
                    <section className="my-5 justify-center">
                        <h2 className='title-2'>Apa itu Javascript?</h2>
                        <p className="section_text">
                            JavaScript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. Jika sebelumnya kalian mungkin belajar HTML dan CSS maka dengan JavaScript kalian bisa membuat tampilan dari website kalian menjadi lebih interaktif lagi.
                        </p>
                    </section>
                    <section className='my-5'>
                        <h2 className="title-2">Kenapa Javascript?</h2>
                        <p className="section_text">
                            Tentunya belajar JavaScript pada saat seperti ini merupakan pilihan yang tepat, dikarenakan JavaScript adalah bahasa yang ramah untuk pemula alias beginner-friendly yang pastinya akan membuat kalian dapat mempelajarinya dengan mudah. Oleh karena itu JavaScript menjadi bahasa paling populer berdasarkan survei yang dilakukan oleh Stackoverflow.
                        </p>
                        <img src="https://camo.githubusercontent.com/dd74d0ff2a9d659a2abf86974c19717db8cff1bea81a1dba60cb575eb175afed/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3639363030363235383739323333333335322f3930353639333037373438343733363531322f756e6b6e6f776e2e706e67" alt="Console inspect" className="my-5 shadow-lg w-full mt-5" />
                    </section>
                    <section className="my-5">
                        <h2 className="title-2">Contoh Penggunaan Javascript</h2>
                        <p className="section_text">
                            Dengan JavaScript kita bisa membuat website yang jauh lebih baik pastinya. Seperti membuat navbar, slider, timer, hingga membuat sebuah game sekalipun yang dapat berjalan di browser, dan tentunya masih banyak lagi yang bisa dibuat dengan JavaScript.
                        </p>
                        <p className="section_text">
                            Beberapa contoh sederhana penggunaan JavaScript:
                        </p>
                        <OrderedList>
                            {
                                data_json.penggunaan.map((val, key) => (
                                    <li style={{ fontSize: '1.125rem' }} className='section_text' key={key}>
                                        <a href={val.url} style={{ textDecoration: 'none' }} className='text-blue_primary font-normal'>{val.nama}</a>
                                    </li>
                                ))
                            }
                        </OrderedList>
                    </section>
                    <section className="my-5">
                        <h2 className="title-2">Tahapan Belajar Javascript</h2>
                        <hr />
                        <h4 className="subtitle-h4">Jalur Belajar Javascript</h4>
                        <p className="section_text">
                            Jalur belajar ini diperuntukkan bagi kalian yang masih awam atau baru saja terjun di dunia pemrograman. Di sini kalian akan belajar dasar-dasar JavaScript mulai dari variabel hingga objek.
                        </p>
                        <div className="container mx-auto px-auto">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                                    <thead className='text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
                                            <th className='px-6 py-3'>#</th>
                                            <th className='px-6 py-3'>Topik</th>
                                            <th className='px-6 py-3'>Target Pembelajaran</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data_json.alur_belajar.basic.map((val, key) => (
                                                <tr key={key} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                                    <td className='font-semibold text-base px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap'>{val.langkah}</td>
                                                    <td className='px-6 py-4'>
                                                        {
                                                            val.status === 'done' && val.id ? (
                                                                <a href={window.location.protocol + '//' + window.location.host + '/javascript/basic/' + val.id.toLowerCase().replace(/ /g, '-')} className="text-blue_primary text-base">{val.topik}</a>
                                                            ) : (
                                                                <p className="text-slate-500 text-base">{val.topik}</p>
                                                            )
                                                        }
                                                    </td>
                                                    <td className='px-6 py-4 text-base'>
                                                        <TextStyle list_text={val.target_pembelajaran} />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default WelcomeJS