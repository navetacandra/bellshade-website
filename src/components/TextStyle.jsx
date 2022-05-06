import { find_first, find_last } from "../Function";

function TextStyle({ __text__ = [] }) {
    let font_style = [
        {
            code: 'mark_code',
            element: (text) => { return `<code class='mark-text'>${text}</code>` }
        },
        {
            code: 'italic',
            element: (text) => { return `<i>${text}</i>` }
        }
    ]
    return __text__.map(text => {
        // let text = val1.split('#').map(_txt => _txt.split(' '));
        // let modified_text = text.map((txt) => {
        //     let result = txt.map((_t) => {
        //         let style_code = _t.split('[')[0];
        //         let style = font_style.filter(s => s.code === style_code)[0];
        //         if(style !== undefined && _t.endsWith(']')) {
        //             let _txt = _t.replace(style_code, '');
        //             return style.element(
        //                 _txt
        //                 .slice(1, -1)
        //             )
        //         } else {
        //             if(style !== undefined && !_t.endsWith(']')) {
        //                 let _txt = _t.replace(style_code, '');
        //                 let loc = find_last(_txt, ']');
        //                 return `${
        //                     style.element(
        //                         _txt
        //                         .slice(1, loc - _txt.length)
        //                     )
        //                 }${_t.slice(loc - _txt.length + 1)}`
        //             }
        //             else {
        //                 return _t
        //             }
        //         }
        //     }).join(' ');
        //     return result;
        // }).join('');
        let modified_text = text.split('#').map(val => {
            let style_code = val.slice(0, find_first(val, '['));
            let filter_style = font_style.filter(font => font.code == style_code)[0] || {code: '', element: (text) => text};
            let text_tmp = val.slice(find_first(val, '[') + 1);
            let end_text = find_last(text_tmp, ']') - text_tmp.length;

            let ind = Math.floor(text_tmp.length / Math.abs(end_text + 1));
            ind = ind >= Infinity ? 0 : ind;
            ind = !isNaN(ind) ? ind : 0;

            let last_txt = {
                val: val,
                txt: !!filter_style.code ? text_tmp.slice(end_text + 1) : '',
                index: ind,
                start: (text_tmp.slice(end_text + 1))[ind]
            }
            let is_ = !!filter_style.code && ind < 1 ? '' : text_tmp.slice(end_text + 1)
            // return `${filter_style.element(text_tmp.slice(0, end_text))}${text_tmp.slice(end_text + 1)}`
            return `${filter_style.element(text_tmp.slice(0, end_text))}${is_}`
        }).join``
        return {__html: modified_text};
    });
}

export default TextStyle