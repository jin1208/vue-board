export default {
    getRead(state, /*getters*/){
        console.log('in getter');
        return state.read;
    }
}