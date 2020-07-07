<template>
<div class="aaa">
    <!-- ps教程图文讲解 -->
    <p style="margin:0px;margin-left:210px;font-size:15px;color:#e60a78">原创:{{watchlist.user_name}}</p>
    <div class="text"><span><span style="color:rgb(24, 23, 23)">aaaaa</span>{{watchlist.text}}</span></div><br>
    <span style="float:right;margin-right:10px;font-size:10px">上传时间: {{watchlist.check_time}}</span><br><br>
</div>
</template>
<script>
export default {
    data(){
        return{
            list:'',
            watchlist:''
        }
},
    created(){
                this.$store.commit('setRight','')
                this.$store.commit('setLeftArrow', true) 
                this.list=this.$route.params.item
                this.$api.course.foundcourse(this.list.buy_id).then(res=>{
                this.watchlist=res.data.message
                this.$store.commit('setTitle','教程'+this.watchlist.id)  
            })
        }
}
</script>
<style scoped>
.aaa{
    height: 100%;
    background-color: rgb(24, 23, 23);
    color: whitesmoke;
    text-align: left;
    font-size:16px
}
.aaa .text{
    margin:5px 10px 0px 10px;
    width:300px
}
</style>