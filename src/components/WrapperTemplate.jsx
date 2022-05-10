import React from 'react'

function WrapperTemplate(props) {
    return (
        <div className="container mx-auto">
            <div className="flex flex-warp">
                <div className="self-center w-full px-5 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white my-10 shadow-lg">
                    <section className='my-5'>
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default WrapperTemplate