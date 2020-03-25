import axios from 'axios';

export default {
    create({commit, /*state*/}, /*payload*/) {
        console.log('in action');
    },
    read({commit, /*state*/}, /*payload*/) {
        console.log('in action');
        axios.get(`/bil/list`)
            .then((res) => {
                commit('read_success', res);
            })
            .catch((res) => {
                commit('read_fail', res);
            })
    }
}