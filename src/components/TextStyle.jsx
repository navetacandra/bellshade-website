import { find_first, find_last } from "../Function";

function TextStyle({ list_text = [] }) {
    let font_style = [
        {
            code: 'mark_code',
            element: (text) => { return `<code class='mark-text'>${text}</code>` }
        },
        {
            code: 'italic',
            element: (text) => { return `<i>${text}</i>` }
        }
    ];

    let modified_text = list_text.split('#').map(val => {
        let style_code = val.slice(0, find_first(val, '['));
        let filter_style = font_style.filter(font => font.code === style_code)[0] || { code: '', element: (text) => text };
        let text_tmp = val.slice(find_first(val, '[') + 1);
        let end_text = find_last(text_tmp, ']') - text_tmp.length;

        let ind = Math.floor(text_tmp.length / Math.abs(end_text + 1));
        ind = ind >= Infinity ? 0 : ind;
        ind = !isNaN(ind) ? ind : 0;

        let is_ = !!filter_style.code && ind < 1 ? '' : text_tmp.slice(end_text + 1)

        return `${filter_style.element(text_tmp.slice(0, end_text))}${is_}`
    }).join``;

    return (
        <>
            <span dangerouslySetInnerHTML={{ __html: modified_text }}></span>
        </>
    )
}

export default TextStyle