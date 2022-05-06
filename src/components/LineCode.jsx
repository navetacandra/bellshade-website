import React, { Fragment } from 'react'
import { find_first, find_last } from '../Function';

function LineCode({ text, _break }) {
    let colors = [
        {
            name: '_',
            color: '#fff'
        },
        {
            name: 'white',
            color: '#fff'
        },
        {
            name: 'comment',
            color: '#6272a4'
        },
        {
            name: 'yellow',
            color: '#f1fa8c'
        },
        {
            name: 'pink',
            color: '#ff79c6'
        },
        {
            name: 'green',
            color: '#50fa7b'
        },
        {
            name: 'blue',
            color: '#8be9fd'
        },
        {
            name: 'purple',
            color: '#bd93f9'
        }
    ]
    let elem = text.split('#').map(val => {
        let color_name = val.slice(0, find_first(val, '['));
        let filter_color = colors.filter(color => color.name == color_name)[0] || {name: '', color: '#fff'};
        let text = val.slice(find_first(val, '['))
        let loc = find_last(text, ']')
        text = `${text.slice(1, loc - text.length)}${text.slice(loc + 2)}`
        return {
            color: filter_color.color,
            text: text
        }
    })
    return (
        elem.map((val, key) => (
            <Fragment key={key}>
                <span style={{ color: val.color }}>
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