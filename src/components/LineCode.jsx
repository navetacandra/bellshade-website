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
        let is_err_wv = color_name.includes('err_wv_');
        let filter_color = highlight_color.filter(color => color.name === (is_err_wv ? color_name.replace('err_wv_', '') : color_name))[0] || { name: 'w', color: '#fff' };
        let _text_ = val.slice(find_first(val, '['))
        let loc = find_last(_text_, ']')
        _text_ = `${_text_.slice(1, loc - _text_.length)}${_text_.slice(loc + 2)}`
        return {
            color: filter_color.color,
            text: _text_,
            err_wavy: is_err_wv,
            color_name: filter_color.name
        }
    })
    return (
        elem.map((val, key) => (
            <Fragment key={key}>
                <span style={
                    val.err_wavy ? {
                        textDecorationColor: '#dc2626',
                        textDecorationLine: 'underline',
                        textDecorationStyle: 'wavy'
                    } : {}
                } className={'font-mono ' + val.color_name} dangerouslySetInnerHTML={{__html: val.text}}>
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