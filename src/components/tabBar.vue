<template>
    <div id='tabBar'>
        <div class="tabItem" :class="{'tabActive': sendCurrTab == 'home'}" @click="setTab('home')">
            <router-link to='/'>
                <p class="icon-p"><i class="icon iconfont icon-wenda"></i></p>
                <p>首页</p>
            </router-link>
        </div>
        <div class="tabItem" :class="{'tabActive': sendCurrTab == 'calendar'}" @click="setTab('calendar')">
            <router-link to='/Calendar'>
                <p class="icon-p"><i class="icon iconfont icon-wenda"></i></p>
                <p>日历</p>
            </router-link>
        </div>
        <div class="tabItem" :class="{'tabActive': sendCurrTab == 'carType'}" @click="setTab('carType')">
            <router-link to='/CarType'>
                <p class="icon-p"><i class="icon iconfont icon-wenda"></i></p>
                <p>车型</p>
            </router-link>
        </div>
        <div class="tabItem" :class="{'tabActive': sendCurrTab == 'mine'}" @click="setTab('mine')">
            <router-link to='/Mine'>
                <p class="icon-p"><i class="icon iconfont icon-wenda"></i></p>
                <p>我的</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tabBar',
        data() {
            return {
    
            }
        },
        mounted() {
            console.log(location.pathname)
            if (location.pathname == '/Calendar') {
                this.setTab('calendar')
            } else if (location.pathname == '/CarType') {
                this.setTab('carType')
            } else if (location.pathname == '/Mine') {
                this.setTab('mine')
            } else {
                this.setTab('home');
            }
        },
        components: {
    
        },
        computed: {
            //提交导航点击栏目
            sendCurrTab() {
                return this.$store.state.currTab
            }
        },
        methods: {
            //点击导航
            setTab(itemIndex) {
                return this.$store.commit('updateTab', itemIndex)
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/common.sass";
    #tabBar {
        position: fixed;
        display: flex;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: $fontSize;
        color: $fontColor;
        background: $bgcolor;
        height: 2.8125rem;
        .tabItem {
            flex: 1;
            p {
                color: $fontColor;
            }
        }
        .tabActive {
            color: #fff;
            p {
                color: #fff;
            }
        }
    }
</style>
