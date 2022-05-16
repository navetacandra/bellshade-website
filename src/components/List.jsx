import React from 'react'

function OrderedList(props) {
    return (
        <ol className={props.className ? props.className + ' ml-4 list-decimal' : 'ml-4 list-decimal'}>
            <div className="ml-4">
                {props.children}
            </div>
        </ol>
    )
}

function UnorderedList(props) {
    return (
        <ul className={props.className ? props.className + ' ml-4 list-disc' : 'ml-4 list-disc'}>
            <div className="ml-4">
                {props.children}
            </div>
        </ul>
    )
}

export {
    OrderedList,
    UnorderedList
}