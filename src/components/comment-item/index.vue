<template>
    <li v-if="comment" class="comment">
        <div class="info">
            <span class="author">{{ comment.author }}</span>
            <span class="item">{{ comment.time | timeAgo}}</span>
        </div>
        <div class="text" v-html="comment.content"></div>
    </li>
</template>

<script>
import moment from 'moment'
export default {
    name: 'comment',
    props: ['comment'],
    filters: {
        timeAgo (value) {
            return moment.unix(value).fromNow()
        }
    }
}
</script>

<style lang="stylus">
.comment-children
    .comment-children
        margin-left 1em

.comment 
    padding 1em 0 
    border-top 1px solid #eeeeee
    position relative
    .expand
        cursor pointer //cursor 属性规定要显示的光标的类型（形状）。
    .info, .text
        font-size .9em
    .info
        padding-bottom 0.5em
        a
            color #999999
            text-decoration underline
        .author
            font-weight 500
            color #222222
        .time
            color #999999
    .text
        color #444444
        font-size  13px
        line-height 1.7
        word-wrap break-word //word-wrap 属性允许长单词或 URL 地址换行到下一行。
        text-align justify //实现两端对齐文本效果。
        a:hover
            color #105cb6
</style>
