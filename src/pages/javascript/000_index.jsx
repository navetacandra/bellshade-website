import React from 'react'
import data_json from '../../data-json/javascript/000_welcome.json'

function WelcomeJS() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-8 card shadow-sm mb-5">
                        <div className="row justify-content-center p-5">
                            <section className="mb-5">
                                <h2 className="mb-4">Apa itu Javascript?</h2>
                                <p className="mb-3">
                                    JavaScript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. Jika sebelumnya kalian mungkin belajar HTML dan CSS maka dengan JavaScript kalian bisa membuat tampilan dari website kalian menjadi lebih interaktif lagi.
                                </p>
                            </section>
                            <section className='mb-5'>
                                <h2 className="mb-4">Kenapa Javascript?</h2>
                                <p className="mb-3">
                                    Tentunya belajar JavaScript pada saat seperti ini merupakan pilihan yang tepat, dikarenakan JavaScript adalah bahasa yang ramah untuk pemula alias beginner-friendly yang pastinya akan membuat kalian dapat mempelajarinya dengan mudah. Oleh karena itu JavaScript menjadi bahasa paling populer berdasarkan survei yang dilakukan oleh Stackoverflow.
                                </p>
                                <img src="https://camo.githubusercontent.com/dd74d0ff2a9d659a2abf86974c19717db8cff1bea81a1dba60cb575eb175afed/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3639363030363235383739323333333335322f3930353639333037373438343733363531322f756e6b6e6f776e2e706e67" alt="Console inspect" className="mb-3" width='100%' height='auto' />
                            </section>
                            <section className="mb-5">
                                <h2 className="mb-4">Contoh Penggunaan Javascript</h2>
                                <p className="mb-3">
                                    Dengan JavaScript kita bisa membuat website yang jauh lebih baik pastinya. Seperti membuat navbar, slider, timer, hingga membuat sebuah game sekalipun yang dapat berjalan di browser, dan tentunya masih banyak lagi yang bisa dibuat dengan JavaScript.
                                </p>
                                <p className="mb-3">
                                    Beberapa contoh sederhana penggunaan JavaScript:
                                </p>
                                <ol>
                                    {
                                        data_json.penggunaan.map((val, key) => (
                                            <li style={{ fontSize: '1.125rem' }} key={key}>
                                                <a href={val.url} style={{ textDecoration: 'none' }}>{val.nama}</a>
                                            </li>
                                        ))
                                    }
                                </ol>
                            </section>
                            <section className="mb-5">
                                <h2 className="mb-4">Tahapan Belajar Javascript</h2>
                                <hr />
                                <h4 className="mb-3">Jalur Belajar Javascript</h4>
                                <p className="mb-3">
                                    Jalur belajar ini diperuntukkan bagi kalian yang masih awam atau baru saja terjun di dunia pemrograman. Di sini kalian akan belajar dasar-dasar JavaScript mulai dari variabel hingga objek.
                                </p>
                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>#</th>
                                            <th scope='col'>Topik</th>
                                            <th scope='col'>Target Pembelajaran</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data_json.alur_belajar.basic.map((val, key) => (
                                                <tr key={key}>
                                                    <td scope='row'>{val.langkah}</td>
                                                    <td>
                                                        <a href={'/javascript/' + val.topik.toLowerCase().replace(/ /g, '-')} className="link-primary">{val.topik}</a>
                                                    </td>
                                                    <td className='text-break'>{val.target_pembelajaran}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomeJS