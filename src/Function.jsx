/**
 * 
 * @param {String} string 
 * @param {String} find_char 
 */
function find_last(string, find_char) {
    let position_list = string.split('').map((char, i) => {
        return char === find_char ? i : false;
    }).filter(el => el);
    
    return position_list.length > 0 ? position_list[position_list.length - 1] : undefined;
}

/**
 * 
 * @param {String} string 
 * @param {String} find_char 
 */
function find_first(string, find_char) {
    let position_list = string.split('').map((char, i) => {
        return char === find_char ? i : false;
    }).filter(el => el);
    
    return position_list.length > 0 ? position_list[0] : undefined;
}

export {
    find_first,
    find_last
}