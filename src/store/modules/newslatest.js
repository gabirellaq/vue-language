import requestPromise from '../../utils/request'


export default {
    state: {
        newslatestarr:[]
    },
    mutations: {
        GETNEWSLATEST (state, res) {
            state.newslatestarr = res;
        }
    },
    actions: {
        async getnewslatestData ({commit}, {lang}) {
            let options = {
                'lang': lang || 'zh'
            }
            let res = await requestPromise('/api/newslatest', options)
            if(res) {
                commit('GETNEWSLATEST',res.data);
            }
        }
    }
}