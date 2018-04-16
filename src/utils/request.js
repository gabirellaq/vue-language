import request from 'request'
import rp from 'request-promise'


let r = 'http://localhost:8333'

const requestPromise = async (url='', qs={}) => {
    let result;
    let options = {
        uri: r + url,
        qs: qs
    }
    await rp(options)
        .then(data => {
            result = JSON.parse(data);
        }).catch(err => {
            console.log(err);
        })
    return result;
}

export default requestPromise;