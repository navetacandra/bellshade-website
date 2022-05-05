import React, { Fragment } from 'react'

function LineCode({ text, _break }) {
    let elem = text.split('#').map(val => {
        let color = ['pink', 'green', 'yellow', 'comment', 'white', 'blue', 'purple', '_'].includes(val.trim().split('[')[0]) ? val.trim().split('[')[0] : 'white';
        let text = val.trim().split('[')[1] ? val.trim().split('[')[1].split(']')[0] : val.trim().split(`${color}[`).join('').slice(0, -1);
        return {
            color: color,
            text: text
        }
    })
    return (
        elem.map((val, key) => (
            <Fragment key={key}>
                <span className={val.color}>
                    {val.text}
                </span>
                {
                    _break !== 'no' && key === elem.length - 1 ? (
                        <br />
                    ) : null
                }
            </Fragment>
        ))
    )
}

export default LineCode