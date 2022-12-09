<template>
    <div class="login_wrapper">
        <div class="login_container">
            <!-- <div class="mask"> -->
                <h1>Login</h1>
                <div class="input_user">
                    <input type="text" id="user">
                </div>
                <div class="input_pwd">
                    <input type="text" id="pwd">
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Login',
    components: {

    },
    created(){
        function sleep(delay) {
            return new Promise(resolve => setTimeout(resolve, delay));
        }

        const _ = require('lodash');

        async function doTask() {
            // console.log('start');
            await sleep(_.random(100, 300));
            // console.log('done');
        }
        let i = 6;
        async function start() {
            i++;
            if (i>6) { return }
            console.log('in stack', i);
            await sleep(300);
            await doTask();
            await start(); // 去掉前面的await就好了
            console.log('out stack', i);
        }

        start();
    },
    mounted(){
        $("input").focus(function (val) {
            // 输入框获取焦点
            if (val.target.id=='user') {
                document.getElementsByTagName('body')[0].style.setProperty(`--${val.target.id}`, 'transparent');
            } else {
                document.getElementsByTagName('body')[0].style.setProperty(`--${val.target.id}`, 'transparent');
            }
        }).blur(function (val) {
            // 输入框失去焦点
            if (val.target.id=='user') {
                document.getElementsByTagName('body')[0].style.setProperty(`--${val.target.id}`, 'black');
            } else {
                document.getElementsByTagName('body')[0].style.setProperty(`--${val.target.id}`, 'black');
            }
        });
    },
    methods: {
    }
}
</script>

<style lang="scss">
$input_width: 150px;
$user_bottom: var(--user, black);
$pwd_bottom: var(--pwd, black);
.login_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: url(../assets/imgs/login_bg.JPG) no-repeat center center;
    background-size: cover;
    .login_container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: $login_width;
        height: ($login_width*0.7);
        background: rgb(20,85,100,0.3);
        border-radius: 15px;
        backdrop-filter: blur(5px);
        h1 {
            margin-top: 2.5rem;
        }
        .input_user, .input_pwd {
            position: relative;
            margin-bottom: 15px;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: $input_width;
                margin-right: 10px;
            }
            &::before {
                content: '';
                display: inline-block;
                width: 26px;
                height: 26px;
                vertical-align: middle;
            }
            input {
                font: inherit;
                background: transparent;
                border-radius: 10px;
                font-size: 16px;
                border: 0;
                transition: background .8s ease;
                padding: 0px 10px;
                width: $input_width;
                box-sizing: content-box;
                margin-left: 5px;
                height: 32px;
                &:focus-visible {
                    background: rgba(0, 0, 0, 0.244);
                    transition: background .8s ease;
                    outline: none;
                }
            }
        }
        .input_user {
            &::after {
                border-bottom: 1px solid $user_bottom;
            }
            &::before {
                background: url(../assets/imgs/profile.png) no-repeat center;
                background-size: cover;
            }
        }
        .input_pwd {
            &::after {
                border-bottom: 1px solid $pwd_bottom;
            }
            &::before {
                background: url(../assets/imgs/lock.png) no-repeat center;
                background-size: cover;
            }
        }
    }
}
</style>