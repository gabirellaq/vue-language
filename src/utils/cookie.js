let getCookie = (name, defaultName) => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)){
        return unescape(arr[2]);
    }
    else {
        return defaultName;
    }
}
export default getCookie;