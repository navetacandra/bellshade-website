import React from 'react'

function Footer({ text }) {
    return (
        <footer className="mt-5 pb-3 footer" style={{ backgroundColor: '#F2F2F2', zIndex: '-3' }}>
            <div className="container">
                <div className="justify-content-center pt-5">
                    <div className="col pt-3 mb-3">
                        <div className="row justify-content-center">
                            <span className="text-center text-dark">
                                Blog ini bersumber dari website <a href="https://petanikode.com" target="_blank" rel="noopener noreferrer">Petani Kode</a> dengan penulisnya <a href="https://www.ardianta.com" target="_blank" rel="noopener noreferrer">Ahmad Muhardian</a>
                            </span>
                        </div>
                    </div>
                    <div className="col text-center">
                        <span>&copy; {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer