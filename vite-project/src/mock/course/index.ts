// 这个文件用来 mock 假数据
import Mock from 'mockjs'
import * as nProgress from "nprogress";

export interface HeaderDataModel {
    id: number | undefined,
    title: string,
    name: string
}
export interface choiseModel {
    name: string,
    id: string
}


export type choisesModel = choiseModel[]

export interface NavModel {
    choises: choisesModel,
    label: string,
    style: string
}

export type NavListModel = NavModel

let data =[
    {
        "choises": [
            {
                "name": "中国舞",
                "id": "ff80808167bef94f0167bf6f6e0a1fd2"
            },
            {
                "name": "古典舞",
                "id": "402881ed649d628e01649d636ea7005b"
            },
            {
                "name": "原创编舞",
                "id": "ff80808167d9dd620167e457f899789a"
            },
            {
                "name": "爵士舞",
                "id": "402881ed649d628e01649d636ea70057"
            },
            {
                "name": "流行热舞",
                "id": "402881ed649d628e01649d636ea80065"
            },
            {
                "name": "成人舞蹈",
                "id": "ff8080816960e987016962b2af0f5323"
            },
            {
                "name": "少儿舞蹈",
                "id": "402881ed649d628e01649d636ea80067"
            },
            {
                "name": "街舞",
                "id": "402881ed649d628e01649d636ea60056"
            },
            {
                "name": "民族舞",
                "id": "402881ed649d628e01649d636ea7005a"
            },
            {
                "name": "热门舞蹈",
                "id": "ff808081683f378701687690e06e66ac"
            },
            {
                "name": "中国风",
                "id": "ff80808167c026c90167c1fbde74258b"
            },
            {
                "name": "民族民间舞",
                "id": "ff8080816a9f772a016ab929bd056c95"
            },
            {
                "name": "基本功",
                "id": "ff80808167effef30167f390c2bf6b63"
            },
            {
                "name": "肚皮舞",
                "id": "402881ed649d628e01649d636ea7005f"
            },
            {
                "name": "儿童舞蹈",
                "id": "ff80808167c6b44f0167c9ec35630d8e"
            },
            {
                "name": "东方舞",
                "id": "ff808081682b399d0168307bc5f64c75"
            }
        ],
        "label": "兴趣技能",
        "style": 1,
    },
    {
        "choises": [
            {
                "name": "2元以下",
                "id": "range_0_2"
            },
            {
                "name": "2-100元",
                "id": "range_2_100"
            },
            {
                "name": "101-400元",
                "id": "range_101_400"
            },
            {
                "name": "400元以上",
                "id": "gt_400"
            }
        ],
        "label": "价格区间",
        "style": 2,
    },
    {
        "choises": [
            {
                "groupType": "courseType",
                "name": "舞蹈教学",
                "id": "9b5f94a5b4bba29f0bbbc7017b69dacd"
            },
            {
                "groupType": "courseType",
                "name": "成品舞",
                "id": "d90d3359dea27b2425db29fb81226186"
            },
            {
                "groupType": "courseType",
                "name": "成人零基础",
                "id": "7dc36a039e68613d4675cc076466cb42"
            },
            {
                "groupType": "courseType",
                "name": "教学视频",
                "id": "b22d4cf8d15650a89db7ae5d9d1b011b"
            },
            {
                "groupType": "courseType",
                "name": "基本功",
                "id": "e3ecd754dcd5101c8a58098f5a24227a"
            },
            {
                "groupType": "courseType",
                "name": "古典舞",
                "id": "fd3fb68ed6b04eb90c9b93dedc128d5e"
            },
            {
                "groupType": "courseType",
                "name": "舞蹈",
                "id": "66af524cb6bcd5b67bb3a26460405fd8"
            },
            {
                "groupType": "courseType",
                "name": "中国舞",
                "id": "420467cf1ef94c55bcea67f8c71c8016"
            },
            {
                "groupType": "courseType",
                "name": "原创编舞",
                "id": "d1fdeb6c0dbd1ba1c4a581d9002db9a3"
            },
            {
                "groupType": "courseType",
                "name": "镜面分解",
                "id": "fcbb85e372500a6143388a464b0a6975"
            },
            {
                "groupType": "courseType",
                "name": "舞蹈组合",
                "id": "15bf4565c57e7bf275a9eb8f741130d4"
            },
            {
                "groupType": "courseType",
                "name": "编创",
                "id": "906eca5597e765798b32b51c2edc1d89"
            },
            {
                "groupType": "courseType",
                "name": "年会舞蹈",
                "id": "6473d6022367442d22981b1f7d8900bc"
            },
            {
                "groupType": "courseType",
                "name": "少儿舞蹈",
                "id": "aa6392b98c56a6cf0f63127f728238ff"
            },
            {
                "groupType": "courseType",
                "name": "爵士舞",
                "id": "5cd482e52bcc21f5508ff32be3f5e55b"
            },
            {
                "groupType": "courseType",
                "name": "民族舞",
                "id": "f6460086e2f766a5e833301dce7f3957"
            }
        ],
        "label": "课程类型",
        "style": 3,
    },
    {
        "choises": [
            {
                "groupType": "learningGoals",
                "name": "舞蹈教学",
                "id": "fec9b0de3766fefebaa95ffa493f1915"
            },
            {
                "groupType": "learningGoals",
                "name": "易于自学",
                "id": "6865fa94c40031db160c4e0f253c64e6"
            },
            {
                "groupType": "learningGoals",
                "name": "气质提升",
                "id": "24a7095516af1ac68b9c931351fb0f61"
            },
            {
                "groupType": "learningGoals",
                "name": "娱乐才艺",
                "id": "6fb7438aec3ccd2e4a2772f3da2da634"
            },
            {
                "groupType": "learningGoals",
                "name": "个人提升",
                "id": "f6f1ed341e5ce4f6e76360e237e6b0ce"
            },
            {
                "groupType": "learningGoals",
                "name": "节奏协调",
                "id": "911174c5093dd4229098634e47d53991"
            },
            {
                "groupType": "learningGoals",
                "name": "专业表演",
                "id": "f79bc1fc58d0be13ed45994eea56df5c"
            },
            {
                "groupType": "learningGoals",
                "name": "舞蹈编创",
                "id": "f1667ffad1fc6c0fa7c244ff3ae30e2f"
            },
            {
                "groupType": "learningGoals",
                "name": "参加比赛",
                "id": "b1911a7e90abf984d022d00e8fec36e5"
            },
            {
                "groupType": "learningGoals",
                "name": "古典舞",
                "id": "3eb05dc2e2423b59be0bc9b08afe495e"
            },
            {
                "groupType": "learningGoals",
                "name": "身体柔韧",
                "id": "71ff153167c8d0c1e404255c6f91aece"
            },
            {
                "groupType": "learningGoals",
                "name": "舞蹈表演",
                "id": "15e03112929e55489f74714d14ca7fb3"
            },
            {
                "groupType": "learningGoals",
                "name": "减肥塑形",
                "id": "5b2e129db4657de03b794d4eb008b308"
            },
            {
                "groupType": "learningGoals",
                "name": "动作分析",
                "id": "2e84ff943a0b56337e44606d534fe6c7"
            },
            {
                "groupType": "learningGoals",
                "name": "便宜方便",
                "id": "af9fd66ea05f3f91af427aab9cab74e2"
            },
            {
                "groupType": "learningGoals",
                "name": "外向敢秀",
                "id": "08fbc07db6ca64a69595b79f3df2a97d"
            }
        ],
        "label": "学习目标",
        "style": 4,
    },
    {
        "choises": [
            {
                "name": "零基础",
                "id": "70"
            },
            {
                "name": "业余初级",
                "id": "10"
            },
            {
                "name": "业余中级",
                "id": "20"
            },
            {
                "name": "业余高级",
                "id": "30"
            },
            {
                "name": "专业初级",
                "id": "40"
            },
            {
                "name": "专业中级",
                "id": "50"
            },
            {
                "name": "专业高级",
                "id": "60"
            }
        ],
        "label": "难易度",
        "style": 5,
    }
]

let NavSmallList = [
    data[0],
    data[1]
]

let NavList = [
    ...data
]



Mock.mock('/course/mock/header', function () {
    return {
        code: 200,
        data: HeaderList,
        message: 'success'
    }

})
Mock.mock('/course/mock/NavList1', function () {
    return {
        code: 200,
        data: NavSmallList,
        message: 'success'
    }
})

Mock.mock('/course/mock/NavList2', function () {
    return {
        code: 200,
        data: NavList,
        message: 'success'
    }
})

//
export interface ImageDataModel {
    title:string,
    price:string,
    people:string,
    hand:string,
    message:string,
    star:string,
    writer:string,
    date:string,
    headpicture:string,
    bigImage:string
}
export type ImageDataListModel=ImageDataModel[]
let imageAllData1=[
    {
        title:'少儿古典舞',
        price:'￥ 48.00',
        people:'12.9W人',
        hand:'699',
        message:'125',
        star:'3523',
        writer:'中舞联盟',
        date:'19-01-31',
        headpicture:"https://rs.dance365.com/photo/a2b29b1da0ff446ea5774c961466acc4_rs_dbaa4f578e3b444fa597c30cf2a2fe67.jpg",
        bigImage:"https://rs.dance365.com/photo/611651f4e146426b8d821fb53ca28330_rs_eb63f94f8a864801b631738a461f48c8.jpg"
    },
    {
        title:'醉春风',
        price:'￥ 328.00',
        people:'1.2W人',
        hand:'3434',
        message:'233',
        star:'3411',
        writer:'中舞联盟',
        date:'20-09-11',
        headpicture:"https://rs.dance365.com/photo/1599890172993_B4E8181AD5174459B7C73DC404AAD66C\n",
        bigImage:"https://rs.dance365.com/photo/49103511d4cc4551ba33ead7cbbd60bf_rs_9418c92b0b8342309b8ca958bb0329fb.jpg",
    },
]
let imageAllData2=[
    {
        title:'pink venom',
        price:'￥ 28.00',
        people:'3.2W人',
        hand:'343',
        message:'623',
        star:'782',
        writer:'小小夹心',
        date:'20-01-11',
        headpicture:"https://rs.dance365.com/photo/3b20a4f687b14070b0521141971d8bfb_rs_9ac756943016442ead19929c00d60d1e",
        bigImage:"https://rs.dance365.com/photo/e1eec9382b8f45c0a162c9386aff17fc_rs_850bd5190a3b4066b7d9ad9054ebad2c",
    },
    {
        title:'【新舞预告】原创编舞《破阵乐》',
        price:'￥ 18.00',
        people:'7.2W人',
        hand:'309',
        message:'693',
        star:'702',
        writer:'青云舞社_子颜',
        date:'20-09-01',
        headpicture:"https://rs.dance365.com/photo/ae0b7e65-fe97-4ef4-aaad-51726fb6c3cb.jpg",
        bigImage:"https://rs.dance365.com/photo/693f5552edec45f8ab680a429735fc04_rs_5bbef368d6fe4647b449277401b1f7ca.jpg",
    },
]
let imageAllData3=[
    {
        title:'【新舞预告】原创编舞《破阵乐》',
        price:'￥ 78.00',
        people:'5.2W人',
        hand:'1309',
        message:'613',
        star:'799',
        writer:'青花与马',
        date:'20-09-09',
        headpicture:"https://rs.dance365.com/photo/77ace200aa4f4d8ca79417876b92283d_rs_c95ff1a0018144bdaf8da967f93d6b4d",
        bigImage:"https://rs.dance365.com/photo/48afcb0e93f94feb804fbfc028eee02d_rs_7479ea97416d48ddbd9a0944ec964b7d",
    },
    {
        title:'【新舞预告】原创编舞《破阵乐》',
        price:'￥ 48.00',
        people:'5.9W人',
        hand:'1709',
        message:'1613',
        star:'899',
        writer:'花与马',
        date:'20-05-09',
        headpicture:"https://rs.dance365.com/photo/77ace200aa4f4d8ca79417876b92283d_rs_c95ff1a0018144bdaf8da967f93d6b4d",
        bigImage:"https://rs.dance365.com/photo/05ea6b111e8e4cd9bbb75a50cf1b4c94_rs_ee26407970834d12b97a85dde1eca33d"
    },
]
let imageAllData4=[
    {
        title:'没有一句妈妈，却唱的都是妈妈《一荤一素》',
        price:'￥ 18.00',
        people:'2.9W人',
        hand:'1109',
        message:'113',
        star:'399',
        writer:'小嚯嚯舞蹈',
        date:'21-05-09',
        headpicture:"https://rs.dance365.com/photo/1a900ca1-96f1-42a4-b982-1aa83622c832.jpg",
        bigImage:"https://rs.dance365.com/photo/1a1ee4a526154b76b5f14446654cd6f0_rs_1948ff431a59453e8e6c37c3630ad8ed.jpg",
    },
    {
        title:'只若初见舞蹈',
        price:'￥ 118.00',
        people:'12.9W人',
        hand:'1909',
        message:'213',
        star:'199',
        writer:'舞蹈小玮',
        date:'20-05-09',
        headpicture:"https://rs.dance365.com/photo/00ce0af4ef054b64adc3fe847ffe0d58_rs_025ecad5eff54153b59fd9ab97f26333.jpg",
        bigImage:"https://rs.dance365.com/photo/50933e63391f43a39bcb0c188f46d129_rs_1ca14b39cef24305860c1723d0336ca7.jpg",
    },
]
let imageAllData5=[
    {
        title:'《tiktok_baby》',
        price:'￥ 118.00',
        people:'12.9W人',
        hand:'1909',
        message:'213',
        star:'199',
        writer:'舞言',
        date:'20-05-09',
        headpicture:"https://photo.dance365.com/man_1@3x.png",
        bigImage:"https://rs.dance365.com/photo/7dd93fa8afbca930ee908fd090fd8740.jpg",
    },
    {
        title:'我是你的格桑花',
        price:'￥ 18.00',
        people:'2.9W人',
        hand:'909',
        message:'2130',
        star:'1990',
        writer:'湖北傲雪寒梅',
        date:'20-05-29',
        headpicture:"https://rs.dance365.com/photo/851398_1581829908428_FBA06E6D6DF1476CA75CE9A9F6FD43AA",
        bigImage:"https://rs.dance365.com/photo/4ba32b8af30140bb96b6a17f3ac05d06_rs_eb306ab36d5d43bb93918f70405168b8",
    },
]
let imageAllData6=[
    {
        title:'来～和我一起pink',
        price:'￥ 28.00',
        people:'12.9W人',
        hand:'4909',
        message:'9130',
        star:'2990',
        writer:'湖北傲雪寒梅',
        date:'20-03-29',
        headpicture:"https://rs.dance365.com/photo/48ad4d6ff3f8488f8e40a88adfb80d83_rs_1add121fc70547c483fc040fc00ce1b7.jpg",
        bigImage:"https://rs.dance365.com/photo/4d55a53274e34d6c8fa3885a167c55b5_rs_81215d1c7d964fb2968f523bccf33197.jpg",
    },
    {
        title:'人间烟火',
        price:'￥ 28.00',
        people:'10.9W人',
        hand:'1909',
        message:'6130',
        star:'990',
        writer:'会跳舞de赵雪儿',
        date:'21-03-29',
        headpicture:"https://rs.dance365.com/default_head@3x.png",
        bigImage:"https://rs.dance365.com/photo/6aa5d18bd7b6438c978b8251d3b000f6_rs_85c441f87f3a48b0861661eb47ca3f15",
    },
]
let imageAllData7=[
    {
        title:'童年的夏夜',
        price:'￥ 28.00',
        people:'7.9W人',
        hand:'1809',
        message:'6630',
        star:'9190',
        writer:'搬运囡囡',
        date:'21-01-29',
        headpicture:"https://rs.dance365.com/photo/1654791165000_rs_1663243348780",
        bigImage:"https://rs.dance365.com/photo/3b40be925fbd479497c2fa15361a8cbf_rs_b8ec6874ff9640db80f3cc9fb1ad007f",
    },
    {
        title:'神话',
        price:'￥ 28.00',
        people:'2.9W人',
        hand:'2809',
        message:'2630',
        star:'9890',
        writer:'搬运囡囡',
        date:'21-01-29',
        headpicture:"https://rs.dance365.com/default_head@3x.png",
        bigImage:"https://rs.dance365.com/photo/8c9dfd8997724956a03d58d929587648_rs_8717756fbcf44437b1ea94705f6fa819.jpg",
    },
]
let imageAllData8=[
    {
        title:'古典舞星河叹',
        price:'￥ 28.00',
        people:'2.9W人',
        hand:'2809',
        message:'2630',
        star:'9890',
        writer:'1535585_U7w6',
        date:'21-01-29',
        headpicture:"https://rs.dance365.com/default_head@3x.png",
        bigImage:"https://rs.dance365.com/photo/f10c2aa411bb4e699e73bfa340b5b94f_rs_c14de3f23d254f1cb2c0b5ccfb69d2c3",
    },
    {
        title:'高先玉老师原创作品《长大后我就成了你》',
        price:'￥ 28.00',
        people:'7.9W人',
        hand:'2809',
        message:'630',
        star:'1890',
        writer:'高先玉艺翔舞蹈学校',
        date:'20-11-29',
        headpicture:"https://rs.dance365.com/photo/7961de1005684c32a7eb4c45fd3797c8_rs_7ed57a887141450aa62f679c56ad4a64",
        bigImage:"https://rs.dance365.com/photo/695940b8b51b44798426fdd45dab18af_rs_9b70883e6fcb43a39c8ecadee2495b1f",
    },
]
let imageAllData9=[
    {
        title:'《Pink Venom》开头+副歌+dancebreak',
        price:'￥ 8.00',
        people:'0.9W人',
        hand:'3809',
        message:'8630',
        star:'7890',
        writer:'高先玉艺翔舞蹈学校',
        date:'20-11-01',
        headpicture:"https://photo.dance365.com/man_1@3x.png",
        bigImage:"https://rs.dance365.com/photo/751111efd58ce2d4389e81f6017d633e.jpg",
    },
    {
        title:'无羁',
        price:'￥ 8.00',
        people:'0.9W人',
        hand:'3809',
        message:'8630',
        star:'7890',
        writer:'文娟0520',
        date:'20-11-01',
        headpicture:"https://rs.dance365.com/photo/1613716706412_152308357E374236B967A9F3381A48F7",
        bigImage:"https://rs.dance365.com/photo/d36fd35a22f4481aa6aa86e3edcdbf02_rs_413a702cda054537b05b60e27534ed4b",
    },
]
let imageAllData10=[
    {
        title:'依组合藏族舞水袖',
        price:'￥ 88.00',
        people:'8.9W人',
        hand:'309',
        message:'630',
        star:'789',
        writer:'文娟0520',
        date:'20-11-11',
        headpicture:"https://rs.dance365.com/photo/e2908d19-8668-46d4-a496-eb906fd65833.jpg",
        bigImage:"https://rs.dance365.com/photo/cbd6d0e46253480fbe93b470d0712aac_rs_595582d1a8c841f7b8038b5facc8250b.jpg",
    },
    {
        title:'高先玉老师原创作品《长大后我就成了你》',
        price:'￥ 88.00',
        people:'8.9W人',
        hand:'309',
        message:'630',
        star:'789',
        writer:'高先玉艺翔舞蹈学校',
        date:'20-11-11',
        headpicture:"https://rs.dance365.com/photo/7961de1005684c32a7eb4c45fd3797c8_rs_7ed57a887141450aa62f679c56ad4a64",
        bigImage:"https://rs.dance365.com/photo/845feaa9529b41df82107706e5f3bdee_rs_14bf7921558e4b47966dd829c9e563c3",
    },
]


let imageData1=[
    ...imageAllData1,
    ...imageAllData2,
    ...imageAllData3,
    ...imageAllData4,
    ...imageAllData5,
    ...imageAllData6,
    ...imageAllData7,
    ...imageAllData8,
    ...imageAllData9,
    ...imageAllData10
]
let imageData2=[
    ...imageData1,
    {
        title:'少儿古典舞',
        price:'￥ 48.00',
        people:'12.9W人',
        hand:'699',
        message:'125',
        star:'3523',
        writer:'中舞联盟',
        date:'19-01-31',
        headpicture:"https://rs.dance365.com/photo/a2b29b1da0ff446ea5774c961466acc4_rs_dbaa4f578e3b444fa597c30cf2a2fe67.jpg",
        bigImage:"https://rs.dance365.com/photo/611651f4e146426b8d821fb53ca28330_rs_eb63f94f8a864801b631738a461f48c8.jpg"
    },
    {
        title:'醉春风',
        price:'￥ 328.00',
        people:'1.2W人',
        hand:'3434',
        message:'233',
        star:'3411',
        writer:'中舞联盟',
        date:'20-09-11',
        headpicture:"https://rs.dance365.com/photo/1599890172993_B4E8181AD5174459B7C73DC404AAD66C\n",
        bigImage:"https://rs.dance365.com/photo/49103511d4cc4551ba33ead7cbbd60bf_rs_9418c92b0b8342309b8ca958bb0329fb.jpg",
    },
    {
        title:'pink venom',
        price:'￥ 28.00',
        people:'3.2W人',
        hand:'343',
        message:'623',
        star:'782',
        writer:'小小夹心',
        date:'20-01-11',
        headpicture:"https://rs.dance365.com/photo/3b20a4f687b14070b0521141971d8bfb_rs_9ac756943016442ead19929c00d60d1e",
        bigImage:"https://rs.dance365.com/photo/e1eec9382b8f45c0a162c9386aff17fc_rs_850bd5190a3b4066b7d9ad9054ebad2c",
    },
    {
        title:'【新舞预告】原创编舞《破阵乐》',
        price:'￥ 18.00',
        people:'7.2W人',
        hand:'309',
        message:'693',
        star:'702',
        writer:'青云舞社_子颜',
        date:'20-09-01',
        headpicture:"https://rs.dance365.com/photo/ae0b7e65-fe97-4ef4-aaad-51726fb6c3cb.jpg",
        bigImage:"https://rs.dance365.com/photo/693f5552edec45f8ab680a429735fc04_rs_5bbef368d6fe4647b449277401b1f7ca.jpg",
    },
    {
        title:'【新舞预告】原创编舞《破阵乐》',
        price:'￥ 78.00',
        people:'5.2W人',
        hand:'1309',
        message:'613',
        star:'799',
        writer:'青花与马',
        date:'20-09-09',
        headpicture:"https://rs.dance365.com/photo/77ace200aa4f4d8ca79417876b92283d_rs_c95ff1a0018144bdaf8da967f93d6b4d",
        bigImage:"https://rs.dance365.com/photo/48afcb0e93f94feb804fbfc028eee02d_rs_7479ea97416d48ddbd9a0944ec964b7d",
    },
]
let imageData3=[
        ...imageAllData10,
        ...imageAllData7,
        ...imageAllData1,
        ...imageAllData2,
        ...imageAllData3,
        ...imageAllData5,
        ...imageAllData4,
        ...imageAllData9,
        ...imageAllData6,
        ...imageAllData8,
]
let imageData4=[
        ...imageAllData5,
        ...imageAllData8,
        ...imageAllData1,
        ...imageAllData2,
        ...imageAllData4,
        ...imageAllData10,
        ...imageAllData7,
        ...imageAllData9,
        ...imageAllData6,
        ...imageAllData3,
]
let imageData5=[
        ...imageAllData6,
        ...imageAllData3,
        ...imageAllData9,
        ...imageAllData2,
        ...imageAllData4,
        ...imageAllData8,
        ...imageAllData10,
        ...imageAllData1,
        ...imageAllData5,
        ...imageAllData7,
]
let imageData6=[
    ...imageAllData10,
    ...imageAllData9,
    ...imageAllData8,
    ...imageAllData7,
    ...imageAllData6,
    ...imageAllData5,
    ...imageAllData4,
    ...imageAllData3,
    ...imageAllData2,
    ...imageAllData1,
]
Mock.mock('/course/mock/imageList', function () {
    return {
        code: 200,
        data: imageData1,
        message: 'success'
    }
})

Mock.mock('/course/mock/imageList2', function () {
    return {
        code: 200,
        data: imageData2,
        message: 'success'
    }
})

Mock.mock('/course/mock/imageList3', function () {
    return {
        code: 200,
        data: imageData3,
        message: 'success'
    }
})

Mock.mock('/course/mock/imageList4', function () {
    return {
        code: 200,
        data: imageData4,
        message: 'success'
    }
})

Mock.mock('/course/mock/imageList5', function () {
    return {
        code: 200,
        data: imageData5,
        message: 'success'
    }
})


Mock.mock('/course/mock/imageList6', function () {
    return {
        code: 200,
        data: imageData6,
        message: 'success'
    }
})
interface tradeModel {
    cover:string,
    id:string,
    name:string
}


export type tradeListModel = tradeModel[]
let tradeList=[
    {
        "cover":"https://rs.dance365.com/photo/1610527923148.png",
        "id":"ff80808176f5683b0176f9ae53656bd9",
        "name":"最新排行榜课程",
    },
    {
        "cover":"https://rs.dance365.com/photo/1658386829376.jpg",
        "name":"民间舞零基础入门课程",
        "id":"ff808081821e7b9501821f8f550d24fa",
    },
    {
        "cover":"https://rs.dance365.com/photo/1658888091963.jpg",
        "name":"爵士舞零基础入门课程",
        "id":"ff80808182349d5901823d6f883964ff",
    },
    {
        "cover":"https://rs.dance365.com/photo/1655277540522.jpg",
        "id":"ff80808181656fae0181663c260602d9",
        "name":"古典舞零基础入门课程",
    },
    {
        "cover":"https://rs.dance365.com/photo/1654585415604.png",
        "name":"夏季线下进修课",
        "id":"ff80808176d21d3d0176daa2ba7d020e",
    },
    {
        "cover":"https://rs.dance365.com/photo/1609409193217.jpg",
        "id":"ff8080816d625748016d717a149a1c45",
        "name":"年会/企业舞蹈开场舞",
    },
    {
        "cover":"https://rs.dance365.com/photo/1589438283460.jpg",
        "name":"网红舞蹈速成训练营",
        "id":"ff80808169491a9f01694c7c0ac17c1d",
    },
    {
        "cover":"https://rs.dance365.com/photo/1611302095121.png",
        "name":"舞者宝典专业进阶必备",
        "id":"ff8080816d625748016d70798fea7a80",
    },
    {
        "cover":"https://rs.dance365.com/photo/1589191810557.jpg",
        "name":"零基础入门视频课",
        "id":"ff80808167be4b9a0167bec0eb34056d",
    },
    {
        "cover":"https://rs.dance365.com/photo/1612927993230.png",
        "name":"成人舞蹈基本功训练",
        "id":"ff8080816d625748016d70869e960298",
    },
    {
        "cover":"https://rs.dance365.com/photo/1589277608576.jpg",
        "name":"“我形我塑”舞蹈健身",
        "id":"ff8080816d625b16016d719e9b131f67",
    },
    {
        "cover":"https://rs.dance365.com/photo/1608255992116.jpg",
        "name":"少儿舞蹈视频课",
        "id":"ff8080816d625b16016d70bdc6ef1296",
    },
    {
        "cover":"https://rs.dance365.com/photo/1611049496245.png",
        "name":"舞蹈人物百科名师课程",
        "id":"ff8080817714a28e017718a2d4d70e3d",
    },
    {
        "cover":"https://rs.dance365.com/photo/1611049481375.png",
        "name":"赛事作品名师课程",
        "id":"ff80808176e10e1a0176e1580d7013c0",
    }
]


Mock.mock('/course/mock/tradeList', function () {
    return {
        code: 200,
        data: tradeList,
        message: 'success'
    }
})
