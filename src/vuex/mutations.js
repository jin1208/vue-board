export default {
    read_success(state, payload){
        console.log('in mutations');
        state.read = payload;
        console.log('mutation state.read')
        console.log(state.read.data);
    },
    read_fail(/*state, payload*/){
        console.log('in mutations');
        console.log('ERROR!');
    }
}