export const SliceString = (str, length) => {
    if(str.length > length) {
        return str.slice(0, length) + '...';
    }
}