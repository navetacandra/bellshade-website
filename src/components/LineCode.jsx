import React, { Fragment } from 'react'
import { find_first, find_last } from '../Function';
import highlight_color from '../data-json/highlight-color.json'

function LineCode({ text, _break }) {
    let elem = text.split('] #').map((val, i) => {
        val = text.split('] #').length < 2 
            ? val.slice(1) 
            : i < 1 
                ? val.slice(1) + ']' 
                : i === (text.split('] #').length - 1) 
                    ? val 
                    : val + ']';
        let color_name = val.slice(0, find_first(val, '['));
        let filter_color = highlight_color.filter(color => color.name === color_name)[0] || { name: '', color: '#fff' };
        let _text_ = val.slice(find_first(val, '['))
        let loc = find_last(_text_, ']')
        _text_ = `${_text_.slice(1, loc - _text_.length)}${_text_.slice(loc + 2)}`
        return {
            color: filter_color.color,
            text: _text_
        }
    })
    return (
        elem.map((val, key) => (
            <Fragment key={key}>
                <span style={{ color: val.color }} className='font-mono'>
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