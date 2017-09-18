<template>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item >
            <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/140903.jpg" alt="">
        </el-carousel-item>

        <el-carousel-item >
            <img src="https://y.gtimg.cn/music/common/upload/mv_t_mv_focus/140848.jpg" alt="">
        </el-carousel-item>

        <el-carousel-item >
            <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/140867.jpg" alt="">
        </el-carousel-item>

        <el-carousel-item >
            <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/140646.jpg" alt="">
        </el-carousel-item>

        <el-carousel-item >
            <a href="http://www.baidu.com">
            <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/140572.jpg" alt="">
            </a>
        </el-carousel-item>
    </el-carousel>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped >
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
.el-carousel__item img{
    width: 100%;
    height: 200px;
}


.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>

