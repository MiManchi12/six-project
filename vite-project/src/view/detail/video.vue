<template>
    <div class="detailVideoContainer">
        <Header></Header>
        <!-- 背景 -->
        <div class="darkBack">
            <div class="detailContainer">
                <!-- 播放器窗口 -->
                <div class="playContainer">
                    <vue3VideoPlay width="1060px" height="595px"
                        poster="https://rs.dance365.com/photo/8b216916-9c9d-471f-983a-b98a77c77c4b.jpg"></vue3VideoPlay>
                </div>
                <!-- 播放量评论收藏 -->
                <div class="video-sub-container">
                    <div class="playStatus">
                        <svg t="1666175904194" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7077" width="20" height="20">
                            <path
                                d="M793.6 972.8l-563.2 0c-113.1008 0-204.8-91.6992-204.8-204.8L25.6 256c0-113.1008 91.6992-204.8 204.8-204.8l563.2 0c113.1008 0 204.8 91.6992 204.8 204.8l0 512C998.4 881.1008 906.7008 972.8 793.6 972.8zM947.2 286.72c0-101.7856-82.5344-184.32-184.32-184.32L261.12 102.4C159.3344 102.4 76.8 184.9344 76.8 286.72l0 450.56c0 101.7856 82.5344 184.32 184.32 184.32l501.76 0c101.7856 0 184.32-82.5344 184.32-184.32L947.2 286.72zM384 308.224l307.2 203.776-307.2 203.776L384 308.224z"
                                p-id="7078" fill="#cdcdcd"></path>
                        </svg>
                        <span>459</span>
                    </div>
                    <div class="enjoyCount">
                        <svg t="1666175863741" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5871" width="20" height="20">
                            <path
                                d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                                p-id="5872" fill="#cdcdcd"></path>
                        </svg>
                        <span>10</span>
                    </div>
                    <div class="favoriteCount">
                        <svg t="1666175965858" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8101" width="20" height="20">
                            <path
                                d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z"
                                p-id="8102" fill="#cdcdcd"></path>
                        </svg>
                        <span>20</span>
                    </div>
                    <!-- 右侧资源下载 -->
                    <div class="sub-container-right">
                        <el-tooltip placement="top">
                            <template #content>
                                <div role="tooltip" id="el-popover-2500" aria-hidden="true" class="el-popover el-popper"
                                    tabindex="0" style="width: 115px; transform-origin: center bottom; z-index: 2019;">
                                    <!---->
                                    <div class="share-container">
                                        <div class="title"><span>用</span><span
                                                class="hight-light-color">中舞网APP</span>扫码提取音频
                                        </div><canvas class="canvas" height="93" width="93"
                                            style="height: 93px; width: 93px;"></canvas>
                                        <p class="sub-tip">
                                            扫描此二维码，同样可下载<br><span class="hight-light-color">“中舞网APP”</span></p>
                                    </div>
                                    <div x-arrow="" class="popper__arrow" style="left: 140.5px;"></div>
                                </div>
                            </template>
                            <span>
                                <div class="icon-item el-popover__reference" aria-describedby="el-popover-6425"
                                    tabindex="0">
                                    <div class="icon-item-div"><svg t="1666180453133" class="icon"
                                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            p-id="5502" width="20" height="20">
                                            <path
                                                d="M846.62272 461.98784c-4.36224-0.69632-8.72448-4.25984-12.34944-9.95328s-6.53312-17.08032-8.704-32.72704c-3.62496-25.6-11.61216-44.83072-25.3952-56.9344-13.78304-12.0832-34.83648-20.62336-63.87712-26.3168a177.54112 177.54112 0 0 1-79.81056-36.29056c-23.22432-17.77664-42.82368-34.85696-58.0608-51.22048-14.52032-13.5168-26.13248-18.49344-34.11968-14.9504-7.9872 4.28032-12.32896 11.38688-12.32896 22.05696v135.18848c0 37.00736 0 76.84096-0.7168 119.54176 0 42.68032-0.73728 83.2512-0.73728 121.6512v157.26592c0.73728 15.64672-2.17088 33.44384-7.24992 52.6336-5.81632 19.23072-16.6912 37.72416-31.9488 54.80448-15.95392 17.05984-37.00736 32.01024-63.11936 44.11392-26.13248 12.0832-58.7776 19.21024-97.97632 21.34016-39.91552 2.12992-75.4688-4.97664-107.39712-20.64384-31.9488-15.64672-56.60672-35.57376-74.0352-59.76064-17.408-24.18688-26.112-50.52416-25.3952-78.97088 0-28.4672 13.06624-55.5008 37.74464-80.40448 24.65792-24.90368 51.52768-42.7008 80.54784-52.65408 29.02016-9.95328 56.60672-15.64672 83.456-16.36352 26.84928-0.7168 50.7904 0.7168 71.84384 5.69344 21.05344 4.25984 37.00736 8.54016 47.16544 12.8V392.97024c0-77.53728 0-165.0688 0.73728-262.5536 0-19.18976 5.07904-34.85696 15.23712-46.94016 10.15808-12.0832 23.22432-19.21024 40.63232-21.34016 13.80352-2.1504 25.3952 0.69632 34.83648 8.51968 9.4208 7.84384 18.14528 17.79712 27.58656 31.31392 9.4208 13.5168 21.03296 29.16352 34.816 46.24384 13.80352 17.08032 32.6656 34.16064 55.9104 50.52416 20.29568 14.9504 37.72416 26.3168 52.96128 32.72704 15.23712 6.41024 29.02016 12.8 42.0864 18.49344 13.06624 5.69344 26.13248 12.10368 38.46144 19.92704 13.06624 7.82336 26.84928 20.64384 42.0864 38.42048 15.23712 17.08032 24.6784 34.87744 28.30336 53.37088 3.62496 18.49344 3.62496 35.57376 0.73728 50.50368-2.90816 14.9504-7.9872 27.7504-14.52032 37.00736-6.53312 9.25696-12.32896 13.5168-17.408 12.8z"
                                                fill="#cdcdcd" p-id="5503"></path>
                                        </svg><span class="tip" style="font-size: 14px;">音频</span></div>
                                </div>
                                <div class="divider-line"></div>
                            </span>
                        </el-tooltip>
                        <el-tooltip placement="top">
                            <template #content>
                                <div role="tooltip" id="el-popover-6977" aria-hidden="true" class="el-popover el-popper"
                                    tabindex="0" style="width: 150px; transform-origin: center bottom; z-index: 2033;">
                                    <!---->
                                    <div style="text-align: center;">
                                        <p style="color: rgb(51, 51, 51); font-size: 14px; margin: 0px 0px 9px;">
                                            下载APP
                                            <br>缓存视频
                                        </p><canvas class="canvas" height="120" width="120"
                                            style="height: 120px; width: 120px;"></canvas>
                                    </div>
                                    <div x-arrow="" class="popper__arrow" style="left: 140.5px;"></div>
                                </div>
                            </template>
                            <span>
                                <div class="icon-item el-popover__reference" aria-describedby="el-popover-6425"
                                    tabindex="0">
                                    <div class="icon-item-div"><svg t="1666180742413" class="icon"
                                            viewBox="0 0 1127 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            p-id="8972" width="20" height="20">
                                            <path
                                                d="M0 512.7168c0 101.632 76.0832 185.9584 176.0256 202.24l35.2256 2.816 196.1984 0 0-50.8416L213.6576 666.9312 190.3104 665.088c-67.4816-10.752-142.0288-90.7776-142.0288-156.2112 0-51.0976 43.5712-133.0176 127.744-162.0992L159.0784 302.5408C155.136 294.0416 153.1392 284.9792 153.1392 275.5584c0-36.7616 37.1712-91.392 95.488-91.392 20.0192 0 43.4688 9.984 56.8832 24.1664l55.04 38.2464 46.7968-62.4128c52.992-79.0016 142.3872-133.3248 243.2-133.3248 142.1824 0 282.5216 135.5264 284.7744 271.0016l0 48.0256 49.5104 13.2608c55.808 18.7904 93.2352 69.3248 93.2352 125.7472 0 65.3824-66.9696 147.3024-134.4512 158.0544l-30.976 0-192.4096 0 0 50.8416 194.8672 0 35.2256-2.816C1050.3168 698.6752 1126.4 614.3488 1126.4 512.7168c0-89.2928-58.7776-165.3248-140.8512-193.4336C982.5792 142.4384 833.9968 0 651.2128 0c-131.84 0-245.8624 74.0864-300.3392 181.76C325.12 154.112 287.8464 136.704 246.3744 136.704c-77.7728 0-140.8 61.2352-140.8 136.704 0 19.712 4.3008 38.4512 11.9808 55.3472C47.9232 362.2912 0 432.0768 0 512.7168zM537.7024 307.2 537.7024 960 307.2 819.2 307.2 870.4 563.2 1024 819.2 870.4 819.2 819.2 588.8 960 588.8 307.2Z"
                                                p-id="8973" fill="#cdcdcd"></path>
                                        </svg><span class="tip" style="font-size: 14px;">下载</span>
                                    </div>
                                </div>
                                <div class="divider-line"></div>
                            </span>
                        </el-tooltip>
                        <el-tooltip placement="top">
                            <template #content>
                                <div role="tooltip" id="el-popover-3154" aria-hidden="true" class="el-popover el-popper"
                                    tabindex="0" style="width: 248px; transform-origin: center bottom; z-index: 2040;">
                                    <!---->
                                    <div class="share-container">
                                        <div class="title">分享给朋友</div>
                                        <div class="el-row">
                                            <div class="el-col el-col-12"><canvas class="canvas" height="94" width="94"
                                                    style="height: 94px; width: 94px;"></canvas>
                                                <p class="sub-tip">手机扫码分享</p>
                                            </div>
                                            <div class="el-col el-col-12">
                                                <div class="share-button-container">
                                                    <div style="padding: 5px 0px 3px 15px;">
                                                        <div title="分享到微博" class="item-button"><img
                                                                src="//rs.dance365.com/img/share_blog@3x.53aba121.png"
                                                                class="share-icon"></div>
                                                        <div title="分享到QQ" class="item-button"><img
                                                                src="//rs.dance365.com/img/share_qq@3x.3d7df1ba.png"
                                                                class="share-icon"></div>
                                                        <div title="复制链接" class="item-button"><img
                                                                src="//rs.dance365.com/img/share_link@3x.a699733e.png"
                                                                class="share-icon"></div>
                                                    </div>
                                                    <p class="sub-tip">点击按钮分享</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div x-arrow="" class="popper__arrow" style="left: 238.5px;"></div>
                                </div>
                            </template>
                            <span>
                                <div class="icon-item el-popover__reference" aria-describedby="el-popover-6425"
                                    tabindex="0">
                                    <div class="icon-item-div"><svg t="1666181048060" class="icon"
                                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            p-id="2299" width="20" height="20">
                                            <path
                                                d="M512 73.142857v73.142857C310.016 146.285714 146.285714 310.016 146.285714 512s163.730286 365.714286 365.714286 365.714286 365.714286-163.730286 365.714286-365.714286h73.142857c0 242.358857-196.498286 438.857143-438.857143 438.857143S73.142857 754.358857 73.142857 512 269.641143 73.142857 512 73.142857z m354.450286 122.258286l-339.309715 339.309714L475.428571 482.998857 812.141714 146.285714h-201.691428V73.142857h329.142857v329.142857h-73.142857V195.401143z"
                                                p-id="2300" fill="#cdcdcd"></path>
                                        </svg><span class="tip" style="font-size: 14px;">分享</span></div>
                                </div>
                            </span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </div>
        <!-- 详情 -->
        <div class="detail-container">
            <div class="detail-content">
                <!-- 标题 -->
                <div class="title-container">
                    <p class="main-title">
                        <img src="../../assets/images/home_img_ycpc.png" alt="" width="40" height="24">
                        <span>原创藏族舞《轻》</span>
                    </p>
                    <div class="practise-btn">
                        加入练习室
                    </div>
                </div>
                <!-- 用户信息 -->
                <div class="user-container">
                    <div class="avatar-name-container">
                        <div class="avatar-img"></div>
                        <div class="text_area">
                            <span class="user-name"></span>
                            <img src="" alt="" class="vip">
                            <span class="user-level">
                                <img src="" alt="">
                                <img src="" alt="">
                            </span>
                        </div>
                    </div>
                </div>
                <!-- 详情 -->
                <div class="pre-container">

                </div>
                <!-- 作者 -->
                <div class="author-container">

                </div>
                <!-- 兴趣 -->
                <div class="hobby-container">

                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";


</script>

<style lang="less" scoped>
.darkBack {
    background-color: #1e1e1e;
    width: 100%;

    .detailContainer {
        width: 1060px;
        margin: 0 auto;
        padding-top: 10px;

        .video-sub-container {
            padding: 18px 20px;
            background-color: #121212;
            display: flex;
            color: #7d8090;
            font-size: 14px;
            height: 20px;
            position: relative;

            .playStatus {
                margin-right: 50px;
                display: flex;
                font-size: 14px;
                cursor: pointer;
                align-items: center;

                svg {
                    display: inline-block;
                    margin-right: 10px;
                    width: 20px;
                    height: 20px;
                }
            }

            .enjoyCount {
                margin-right: 50px;
                display: flex;
                font-size: 14px;
                cursor: pointer;
                align-items: center;

                svg {
                    display: inline-block;
                    margin-right: 10px;
                    width: 20px;
                    height: 20px;
                }
            }

            .favoriteCount {
                margin-right: 50px;
                display: flex;
                font-size: 14px;
                cursor: pointer;
                align-items: center;

                svg {
                    display: inline-block;
                    margin-right: 10px;
                    width: 20px;
                    height: 20px;
                }
            }

            .sub-container-right {
                position: absolute;
                right: 20px;

                .icon-item {
                    display: inline-block;
                    vertical-align: middle;
                    cursor: pointer;

                    .icon-item-div {
                        display: flex;

                        span {
                            display: block;
                            text-align: center;
                        }

                        .icon {
                            width: 20px;
                            height: 20px;
                        }

                        .tip {
                            color: #b1b5c1;
                            margin: 0 0 0 8px;
                        }
                    }
                }

                .divider-line {
                    display: inline-block;
                    background-color: #7d8090;
                    width: 1px;
                    height: 16px;
                    margin: 0 26px;
                    vertical-align: middle;
                }
            }
        }
    }

}
</style>