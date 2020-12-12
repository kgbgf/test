<template>
    <div id="nav">
        <div class="logo">
            网抑云音乐
        </div>
        <div class="router">
            <router-link to="home">发现音乐</router-link>
            <router-link to="rank">排行榜</router-link>
            <router-link to="song_sheet">歌单</router-link>
            <router-link to="singer">歌手</router-link>
            <router-link to="video">视频</router-link>
            <router-link to="mv">MV</router-link>
        </div>
        <div class="search">
            <span>
                搜索
            </span>
        </div>
        <div class="user">
            登录
        </div>
    </div>
</template>

<script>
export default {
    name:"Nav"
}
</script>

<style lang="less" scoped>
#nav{
    height: 65px;
    width: 100%;
    display: flex;
    line-height: 65px;
    text-align: center;
    background: white;
    border-bottom: 1px rgb(240, 240, 240) solid;
    

    .logo{
        margin-left: 5%;
        width: 15%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: bolder;
        color: black;
    }

    .router{
        width: 60%;
        color: gray;
        
        a{
            float: left;
            padding: 0 10px;
            font-size: 14px;
        }
    }

    .search{
        width: 10%;

        span{
            height: 30px;
            padding: 5px 30px;
            border-right: 2px #ececec solid;
        }
    }
}
</style>