export const SliceString = (str, length) => {
    if(str.length > length) {
        return str.slice(0, length) + '...';
    }else if(str.length===0) {
        return '';
    }
}