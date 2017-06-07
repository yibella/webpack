<template>
  	<div>
    	<div class="your_scores_container">
            <header class="your_scores"><span class="score_num">{{score}}</span><span class="fenshu">分！</span></header>
            <div class="result_tip">{{scoreTips}}</div>
        </div>
        <div class="share_button" @click="showCover">分享</div>
        <div class="share_code">
            <header class="share_header">关注辰数。</header>
            <img src="../../images/4-4.png" height="212" width="212" class="code_img"> 
        </div>
        <div class="share_cover" v-show="showHide" @click="showCover">
            <img src="../../images/5-2.png" class="share_img">
        </div>
  	</div>
</template>

<script>

export default {
	name: 'score',
    data(){
        return {
            showHide: false,
            score: 0,
            scoreTips:'',
            shareTitle:'',
            scoreTipsArr:['你是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明吧！'],
        }
    },
    methods: {
        showCover: function (){
            this.showHide = !this.showHide;
        },
        getScoreTip: function (){
            if(this.score <= 50) {
                this.scoreTips = this.scoreTipsArr[0];
                return
            }
            if(this.score <= 70) {
                this.scoreTips = this.scoreTipsArr[1];
                return
            }
            if(this.score <= 80) {
                this.scoreTips = this.scoreTipsArr[2];
                return
            }
            if(this.score <= 90) {
                this.scoreTips = this.scoreTipsArr[3];
                return
            }
            if(this.score <= 100) {
                this.scoreTips = this.scoreTipsArr[4];
            }
        }
    },
	created(){
        this.score = 100;
        this.getScoreTip();
        //document.body.style.backgroundImage = 'url(./static/img/4-1.jpg)';
    }
}

</script>

<style lang="less">
    body{
        //background-image: url(../../images/4-1.jpg);
        padding-top: 1.2rem;
    }
    .your_scores_container{
        width: 9.7rem;
        height: 8rem;
        background: url(../../images/4-2.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto 0;
        position: relative;
        .your_scores{
            position: absolute;
            width: 100%;
            text-indent: 3.3rem;
            top: 3rem;
            font-size: 1.4rem;
            font-weight: 900;
            -webkit-text-stroke: 0.05rem #412318;
            font-family: 'Microsoft YaHei';
            .score_num{
                font-family: Tahoma,Helvetica,Arial;
                color: #a51d31;
            }
            .fenshu{
                color: #a51d31;
            }
        }
        .result_tip{
            position: absolute;
            top: 6rem;
            width: 9rem;
            left: 0.6rem;
            color: #3e2415;
            font-size: 0.65rem;
            text-align: center;
        }
    }
    .share_button{
        width: 6.025rem;
        height: 2rem;
		line-height: 2rem;
		text-align: center;
		border: 1px solid #000;
		border-radius: 5px;
		color: #FFE047;
        margin: 0.8rem auto 0;
        //background: url(../../images/4-3.png) no-repeat 0.4rem 0;
        background-size: 5.825rem 100%;
    }
    .share_code{
        width: 5.3rem;
        margin: 1.5rem auto 0;
        .share_header{
            color: #664718;
            font-size: 0.475rem;
            font-family: 'Microsoft YaHei';
            width: 7rem;
            font-weight: 500;
        }
        .code_img{
            height: 5.3rem;
            width: 5.3rem;
            margin-top: 0.5rem;
        }
    }
    .share_cover{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: url(../../images/5-1.png) no-repeat;
        background-size: 100% 100%;
        opacity: 0.92;
    }
    .share_img{
        height: 10.975rem;
        width: 11.95rem;
        position: fixed;
        top: 0.5rem;
        left: 50%;
        margin-left: -5.975rem;
    }
</style>
