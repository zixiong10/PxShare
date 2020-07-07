var state = {
    message:{
        user_id: '',
        user_name: '',
        role: '',
        user_photo:'',
        password:'',
        solt:'',
        cash:'',
        benefit:'',
        gold:''
    }
}
var mutations = {
    setuserMessage(state, msg) { //设置用户信息
        state.message = msg
    },
    
}
var actions = {
}

export default {
    state, mutations, actions
}