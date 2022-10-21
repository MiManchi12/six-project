import { defineStore } from "pinia";
export const useVideoStore = defineStore('video', {
    state: () => {
        return {
            video: [
                {
                    "addressChanged": false,
                    "addressConfirmRemind": false,
                    "aiyigeApplication": null,
                    "auditMsg": [],
                    "auditStatus": null,
                    "auditTime": null,
                    "auditor": null,
                    "auditorName": null,
                    "categoryId": null,
                    "channel": "DanceChannel",
                    "cityId": "402881bb60f8eae00160f8eafd7d0137",
                    "cityName": "南京",
                    "classification": "course",
                    "commodityBackup": {
                        "commissionAmount": null,
                        "commissionRate": null,
                        "commissionType": null,
                        "originPrice": "0.0",
                        "price": "0.0",
                        "showLinePrice": false,
                        "unitPrice": "0.0"
                    },
                    "courseEnded": null,
                    "cover": [
                        "https://rs.dance365.com/photo/1664182794999_rs_1664182795875"
                    ],
                    "createTime": 1664183940934,
                    "creator": "230449",
                    "creatorBackup": {
                        "accid": "d6f1b3133a3342084c7bea831f87008c",
                        "avatar": "https://photo.dance365.com/man_1@3x.png",
                        "certificationType": null,
                        "id": "230449",
                        "level": 19,
                        "mobile": null,
                        "name": "舞言",
                        "recentSellerFavorableValue": -1.0,
                        "recomFactor": null,
                        "recomFactorExpireTime": null,
                        "sellerFavorableValue": -1.0,
                        "type": null,
                        "vipExpireTime": null,
                        "vipGrade": 0
                    },
                    "depositAmount": 0.0,
                    "detailBackup": {
                        "content": [],
                        "guarantee": []
                    },
                    "divisionBackup": null,
                    "editHighestVersion": null,
                    "enclosureCount": 0,
                    "enclosures": [],
                    "esSyncStatus": null,
                    "esid": null,
                    "esidBackup": null,
                    "favorableValue": -1.0,
                    "forceUpdate": 0,
                    "freshnessDegree": null,
                    "hasLiveBroadcast": 0,
                    "id": "89e433da4546402fa35e85c034b6a334",
                    "imageTitleBackup": null,
                    "initExposureNum": null,
                    "inventoryBackup": null,
                    "letBuy": null,
                    "likabilityDegree": null,
                    "liveBroadcast": null,
                    "liveBroadcastTitles": [],
                    "mediaSummary": {
                        "count": 2,
                        "duration": 245899
                    },
                    "mineBackup": {
                        "accessoryRequired": 0,
                        "buyed": 0,
                        "commented": 0,
                        "favoriteId": null,
                        "iosDeviceVip": 0,
                        "letInLiveCourse": 0,
                        "liveCourseRequired": 0,
                        "majorCourseRequired": 0,
                        "musicRequired": 0,
                        "mutualFollower": false,
                        "praiseId": null,
                        "resourceFrom": null,
                        "roomRole": null,
                        "userFollowId": null,
                        "videoCourseRequired": 0
                    },
                    "momentClassificationBackup": {
                        "originAuthor": "炫舞国际",
                        "workTitle": "《DICE》DanceBreak+副歌",
                        "originalStatement": 0,
                        "classification": "course"
                    },
                    "moreBackup": {
                        "videoCount": 2,
                        "totalDuration": 245899,
                        "allowExtractAudio": 1,
                        "videos": [
                            {
                                "cover": "https://rs.dance365.com/photo/c0be150993e5497cd590c06bcc4a8077.jpg",
                                "duration": 31393,
                                "size": 10685316,
                                "originUrl": "",
                                "free": "1",
                                "title": "【炫舞国际】NMIXX新歌《DICE》DanceBreak+副歌_镜面舞蹈（舞蹈分解在主页）",
                                "url": "",
                                "hlsUrl": "https://rs.dance365.com/video/1664182812535_rs_bd150d2781b549a78adbb63c89fdd2119h16.m3u8"
                            },
                            {
                                "cover": "https://rs.dance365.com/photo/00410a88f2a8e0b70d7fa6ffa9e82fa1.jpg",
                                "duration": 214506,
                                "size": 50191769,
                                "originUrl": "",
                                "free": "1",
                                "title": "【炫舞国际】NMIXX新歌《DICE》保姆级慢速镜面_舞蹈教学_（扒舞必备）",
                                "url": "",
                                "hlsUrl": "https://rs.dance365.com/video/1664182812538_rs_e077946d70fd4bf192a09cffe1e7e466hbft.m3u8"
                            }
                        ]
                    },
                    "num": null,
                    "onSalesBackup": null,
                    "onsellTime": 1664183942137,
                    "onsellUpdateTime": 1664183942137,
                    "priorityDisplay": null,
                    "priorityDisplayTime": null,
                    "processTime": null,
                    "rand": null,
                    "recDegree": null,
                    "recentFavorableValue": -1.0,
                    "recommendActivityAndTopic": [],
                    "recommendMineBackup": [
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1663824738662_rs_1663824740702"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=f91d6bd132984246bf2b7572046994cc&resourceId=89e433da4546402fa35e85c034b6a334&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 1,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 234,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 1,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 1
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "f91d6bd132984246bf2b7572046994cc",
                            "title": "《DICE》副歌",
                            "momentClassificationBackup": {
                                "originAuthor": "Thea",
                                "workTitle": "《DICE》副歌",
                                "originalStatement": 0,
                                "classification": "course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1664341146875_rs_1664341147780"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=76796565ab35437593e184ebd859a970&resourceId=89e433da4546402fa35e85c034b6a334&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 32,
                                "requireVideoCourseCount": 5,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 5,
                                "requireAccessoryCount": 2,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 4892,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 91,
                                "requireMajorCourseCount": 3,
                                "userCacheCount": 33
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "76796565ab35437593e184ebd859a970",
                            "title": "DICE",
                            "momentClassificationBackup": {
                                "originAuthor": "Chae Reung",
                                "workTitle": "DICE",
                                "originalStatement": 0,
                                "classification": "course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1664527191759_rs_1664527192582"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=b5416e6cbf774578ad2681267bbef1bf&resourceId=89e433da4546402fa35e85c034b6a334&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 5,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 889,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 10,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 6
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "b5416e6cbf774578ad2681267bbef1bf",
                            "title": "DICE",
                            "momentClassificationBackup": {
                                "originAuthor": "呱唧不呱Nikki",
                                "workTitle": "DICE",
                                "originalStatement": 0,
                                "classification": "course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1661234036049_rs_1661234037637"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=4e1093ac286b4a41981aba52855bcb6e&resourceId=89e433da4546402fa35e85c034b6a334&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 87,
                                "requireVideoCourseCount": 27,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 24,
                                "requireAccessoryCount": 9,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 6818,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 231,
                                "requireMajorCourseCount": 10,
                                "userCacheCount": 130
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "4e1093ac286b4a41981aba52855bcb6e",
                            "title": "《Pink Venom》副歌+Dancebreak",
                            "momentClassificationBackup": {
                                "originAuthor": "Thea",
                                "workTitle": "《Pink Venom》副歌+Dancebreak",
                                "originalStatement": 0,
                                "classification": "course"
                            }
                        }
                    ],
                    "recommendOtherBackup": [
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1665223204396_rs_1665223205912"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=ab6db884881e49f787b1135216570cd9&resourceId=89e433da4546402fa35e85c034b6a334&source=recommend_other",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 69,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 2,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 1
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "ab6db884881e49f787b1135216570cd9",
                            "title": "DICE 副歌",
                            "momentClassificationBackup": {
                                "originAuthor": "粒几每天吃超多",
                                "workTitle": "DICE 副歌",
                                "originalStatement": 0,
                                "classification": "course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/b384c9e9-7f23-4213-82c7-92bc6fed7188.jpg"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 8,
                                "selledInventory": 26
                            },
                            "router": "wudao://dance365.com/detail/video_course?momentId=6830d24a122647249142e13adcfc7c24&resourceId=89e433da4546402fa35e85c034b6a334&source=recommend_other",
                            "subject": "video_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 1,
                                "lockCount": 8,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 22,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 1,
                                "shareAmount": "28.08",
                                "commentCount": 0,
                                "shareCount": 16,
                                "requireAccessoryCount": 1,
                                "reviewCount": 2,
                                "sellAmount": 78,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 26,
                                "viewCount": 4586,
                                "actualSellCount": 26,
                                "liveStatus": 0,
                                "favoriteCount": 93,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 10
                            },
                            "editHighestVersion": "5.3.14",
                            "id": "6830d24a122647249142e13adcfc7c24",
                            "title": "华莎《Maria》副歌部分抖音舞镜面详细分解教学",
                            "momentClassificationBackup": {
                                "workTitle": "华莎《Maria》副歌部分抖音舞镜面详细分解教学"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1613981943577_1613981929157"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 79,
                                "selledInventory": 100
                            },
                            "router": "https://m.dance365.com/detail/live_course?momentId=87f6eb6a5b024e4f921b382ddca83f90&resourceId=89e433da4546402fa35e85c034b6a334&source=recommend_other",
                            "subject": "live_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 50,
                                "lockCount": 79,
                                "studentCount": 103,
                                "playBackDuration": 58171,
                                "praiseCount": 52,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": "3210.56",
                                "commentCount": 44,
                                "shareCount": 194,
                                "requireAccessoryCount": 0,
                                "reviewCount": 11,
                                "sellAmount": 7900,
                                "signupCount": 103,
                                "requireLiveCourseCount": 0,
                                "sellCount": 100,
                                "viewCount": 53340,
                                "actualSellCount": 100,
                                "liveStatus": 0,
                                "favoriteCount": 271,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 101
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "87f6eb6a5b024e4f921b382ddca83f90",
                            "title": "30天流行舞零基础训练营【天天跟我跳 · 练舞半小时 】",
                            "momentClassificationBackup": {
                                "workTitle": "30天流行舞零基础训练营【天天跟我跳 · 练舞半小时 】",
                                "classification": "live_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/c8c22f5f1ee7454d82ca0a2ee1985a25.jpg"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 5,
                                "virtualInventory": 0,
                                "availableInventory": 5,
                                "orderOccupiedInventory": 0,
                                "selledInventory": 0
                            },
                            "router": "https://m.dance365.com/detail/major_course?momentId=b7d1e1770fd94498897f9a353ee492ab&resourceId=89e433da4546402fa35e85c034b6a334&source=recommend_other",
                            "subject": "major_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 3,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 3,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 2,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 1455,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 11,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 0
                            },
                            "editHighestVersion": "5.7.4",
                            "id": "b7d1e1770fd94498897f9a353ee492ab",
                            "title": "北京舞蹈学院 张杏——汉唐舞",
                            "momentClassificationBackup": {
                                "workTitle": "北京舞蹈学院 张杏——汉唐舞",
                                "originalStatement": 0,
                                "classification": "major_course"
                            }
                        }
                    ],
                    "relevancyAvocations": [
                        "流行热舞",
                        "韩舞",
                        "爵士舞",
                        "舞蹈",
                        "舞蹈相关",
                        "舞蹈",
                        "舞蹈相关"
                    ],
                    "remark": null,
                    "repeatRequest": null,
                    "requireBackup": [
                        {
                            "requireDesc": "求视频课",
                            "requireType": "video_course"
                        },
                        {
                            "requireDesc": "求配套用品",
                            "requireType": "accessory"
                        },
                        {
                            "requireDesc": "求线下课",
                            "requireType": "major_course"
                        }
                    ],
                    "router": "wudao://dance365.com/detail/video?momentId=89e433da4546402fa35e85c034b6a334",
                    "securityAuditResult": null,
                    "securityStatus": 5,
                    "shelfTime": null,
                    "statisticsBackup": {
                        "actualSellCount": 0,
                        "commentCount": 0,
                        "enquiryCount": 0,
                        "exposureCount": 0,
                        "favoriteCount": 5,
                        "liveStatus": 0,
                        "lockCount": 0,
                        "playBackDuration": 0,
                        "praiseCount": 2,
                        "requireAccessoryCount": 0,
                        "requireLiveCourseCount": 0,
                        "requireMajorCourseCount": 0,
                        "requireMusicCount": 0,
                        "requireVideoCourseCount": 0,
                        "reviewCount": 0,
                        "sellAmount": 0,
                        "sellCount": 0,
                        "shareAmount": 0,
                        "shareCount": 0,
                        "signupCount": 0,
                        "studentCount": 0,
                        "userCacheCount": 3,
                        "viewCount": 266
                    },
                    "status": "3",
                    "studyProgressBackup": [],
                    "subject": "video",
                    "subjectTag": null,
                    "summary": null,
                    "tags": [
                        {
                            "groupType": "channel",
                            "name": "舞蹈",
                            "id": "DanceChannel"
                        },
                        {
                            "groupType": "avocation",
                            "name": "流行热舞",
                            "id": "402881ed649d628e01649d636ea80065"
                        },
                        {
                            "groupType": "avocation",
                            "name": "韩舞",
                            "id": "ff80808167bec85c0167bee5673804a8"
                        },
                        {
                            "groupType": "avocation",
                            "name": "爵士舞",
                            "id": "402881ed649d628e01649d636ea70057"
                        }
                    ],
                    "targetStatus": null,
                    "ticket": null,
                    "title": "《DICE》DanceBreak+副歌",
                    "topicQuoteInfos": [],
                    "updateTime": null,
                    "version": 2,
                    "vipTag": null,
                    "vipTitleBackup": null,
                    "visiblePermissions": "all",
                    "webUrl": "https://m.dance365.com/detail/video?momentId=89e433da4546402fa35e85c034b6a334&share=share",
                    "wordFilterStatus": "pass"
                },
                {
                    "addressChanged": false,
                    "addressConfirmRemind": false,
                    "aiyigeApplication": null,
                    "auditMsg": [],
                    "auditStatus": null,
                    "auditTime": null,
                    "auditor": null,
                    "auditorName": null,
                    "categoryId": null,
                    "channel": "DanceChannel",
                    "cityId": "402881bb60f8eae00160f8eafd7d0137",
                    "cityName": "南京",
                    "classification": "original",
                    "commodityBackup": {
                        "commissionAmount": null,
                        "commissionRate": null,
                        "commissionType": null,
                        "originPrice": "0.0",
                        "price": "0.0",
                        "showLinePrice": false,
                        "unitPrice": "0.0"
                    },
                    "courseEnded": null,
                    "cover": [
                        "https://rs.dance365.com/photo/1660811552992_rs_1660811555167"
                    ],
                    "createTime": 1660811575169,
                    "creator": "324700",
                    "creatorBackup": {
                        "accid": "56be8dea4f05ee39a6cae00b0c9e3a7d",
                        "avatar": "https://rs.dance365.com/photo/38fa4676-8435-45fc-a422-c43a72761428.jpg",
                        "certificationType": "personal",
                        "id": "324700",
                        "level": 27,
                        "mobile": null,
                        "name": "城市舞集_原派澜",
                        "recentSellerFavorableValue": 4.6,
                        "recomFactor": null,
                        "recomFactorExpireTime": null,
                        "sellerFavorableValue": 4.6,
                        "type": null,
                        "vipExpireTime": null,
                        "vipGrade": 0
                    },
                    "depositAmount": 0.0,
                    "detailBackup": {
                        "content": [],
                        "guarantee": []
                    },
                    "divisionBackup": null,
                    "editHighestVersion": null,
                    "enclosureCount": 0,
                    "enclosures": [],
                    "esSyncStatus": null,
                    "esid": null,
                    "esidBackup": null,
                    "favorableValue": -1.0,
                    "forceUpdate": 0,
                    "freshnessDegree": null,
                    "hasLiveBroadcast": 0,
                    "id": "f10239ede7da483f9f34c513fc0edb00",
                    "imageTitleBackup": null,
                    "initExposureNum": null,
                    "inventoryBackup": null,
                    "letBuy": null,
                    "likabilityDegree": null,
                    "liveBroadcast": null,
                    "liveBroadcastTitles": [],
                    "mediaSummary": {
                        "count": 1,
                        "duration": 90944
                    },
                    "mineBackup": {
                        "accessoryRequired": 0,
                        "buyed": 0,
                        "commented": 0,
                        "favoriteId": null,
                        "iosDeviceVip": 0,
                        "letInLiveCourse": 0,
                        "liveCourseRequired": 0,
                        "majorCourseRequired": 0,
                        "musicRequired": 0,
                        "mutualFollower": false,
                        "praiseId": null,
                        "resourceFrom": null,
                        "roomRole": null,
                        "userFollowId": null,
                        "videoCourseRequired": 0
                    },
                    "momentClassificationBackup": {
                        "originAuthor": "城市舞集_原派澜",
                        "originSource": "original",
                        "workTitle": "热门古风舞蹈编舞《人间烟火》 视频教程已上线",
                        "originalStatement": 1,
                        "classification": "original"
                    },
                    "moreBackup": {
                        "videoCount": 1,
                        "totalDuration": 90944,
                        "allowExtractAudio": 1,
                        "videos": [
                            {
                                "cover": "https://rs.dance365.com/photo/198f95d867d6dbee9b33544773c76e09.jpg",
                                "duration": 90944,
                                "size": 182219869,
                                "originUrl": "",
                                "free": "1",
                                "title": "《人间烟火》",
                                "url": "",
                                "hlsUrl": "https://rs.dance365.com/video/1660811483579_rs_72aeb79a72744201b3a0bbdf1c061522oobb.m3u8"
                            }
                        ]
                    },
                    "num": null,
                    "onSalesBackup": null,
                    "onsellTime": 1660811553413,
                    "onsellUpdateTime": 1661157813778,
                    "priorityDisplay": null,
                    "priorityDisplayTime": null,
                    "processTime": null,
                    "rand": null,
                    "recDegree": null,
                    "recentFavorableValue": -1.0,
                    "recommendActivityAndTopic": [],
                    "recommendMineBackup": [
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1662545899603_rs_1662545904075"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=099a5a70f6bc4813af2f2db7fd4f5cbf&resourceId=f10239ede7da483f9f34c513fc0edb00&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 102,
                                "requireVideoCourseCount": 106,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 153,
                                "requireAccessoryCount": 31,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 11267,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 417,
                                "requireMajorCourseCount": 30,
                                "userCacheCount": 274
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "099a5a70f6bc4813af2f2db7fd4f5cbf",
                            "title": "热门古风舞蹈《人间烟火》，视频教学分解已上线",
                            "momentClassificationBackup": {
                                "originAuthor": "城市舞集_原派澜",
                                "originSource": "original",
                                "workTitle": "热门古风舞蹈《人间烟火》，视频教学分解已上线",
                                "originalStatement": 1,
                                "classification": "original"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1660903581719_rs_1660903584204"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 18,
                                "selledInventory": 14
                            },
                            "router": "wudao://dance365.com/detail/video_course?momentId=2cacaf42777e409bb4035145a815c3a9&resourceId=f10239ede7da483f9f34c513fc0edb00&source=recommend_mine",
                            "subject": "video_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 4,
                                "lockCount": 18,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 15,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 1,
                                "shareAmount": "328.3",
                                "commentCount": 3,
                                "shareCount": 35,
                                "requireAccessoryCount": 2,
                                "reviewCount": 0,
                                "sellAmount": 1372,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 14,
                                "viewCount": 2882,
                                "actualSellCount": 14,
                                "liveStatus": 0,
                                "favoriteCount": 92,
                                "requireMajorCourseCount": 1,
                                "userCacheCount": 12
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "2cacaf42777e409bb4035145a815c3a9",
                            "title": "热门古风舞蹈《人间烟火》详细教学分解",
                            "momentClassificationBackup": {
                                "workTitle": "热门古风舞蹈《人间烟火》详细教学分解",
                                "classification": "video_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1665206732318_rs_1665206739044"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=ba879f340e2e4e87ae09bbf7d99b02ee&resourceId=f10239ede7da483f9f34c513fc0edb00&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 40,
                                "requireVideoCourseCount": 40,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 26,
                                "requireAccessoryCount": 3,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 3832,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 161,
                                "requireMajorCourseCount": 10,
                                "userCacheCount": 111
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "ba879f340e2e4e87ae09bbf7d99b02ee",
                            "title": "简单古典舞推荐《人间烟火》，视频教程已上线",
                            "momentClassificationBackup": {
                                "originAuthor": "城市舞集_原派澜",
                                "originSource": "original",
                                "workTitle": "简单古典舞推荐《人间烟火》，视频教程已上线",
                                "originalStatement": 1,
                                "classification": "original"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/647d0590-403f-443a-b5e4-09a351bef01f.jpg"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=ecbb6b657bec4d16970c903f6810845f&resourceId=f10239ede7da483f9f34c513fc0edb00&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 16,
                                "requireVideoCourseCount": 21,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 32,
                                "requireAccessoryCount": 1,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 3098,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 122,
                                "requireMajorCourseCount": 7,
                                "userCacheCount": 60
                            },
                            "editHighestVersion": "5.3.14",
                            "id": "ecbb6b657bec4d16970c903f6810845f",
                            "title": "古典舞《苏幕遮》视频教程已上线",
                            "momentClassificationBackup": {
                                "originAuthor": "程昱溪",
                                "originSource": "original",
                                "workTitle": "古典舞《苏幕遮》视频教程已上线",
                                "classification": "original"
                            }
                        }
                    ],
                    "recommendOtherBackup": [
                        {
                            "cover": [
                                "https://images-la.dance365.com/IM1517276939145EAGAEEEEEEEAEEHEM"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=12560390&resourceId=f10239ede7da483f9f34c513fc0edb00&source=recommend_other",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "enquiryCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 3,
                                "requireVideoCourseCount": 2,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 3,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "sellCount": 0,
                                "requireLiveCourseCount": 0,
                                "viewCount": 4994,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 8,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 3
                            },
                            "id": "12560390",
                            "title": "【赤九玖】❀不染❀【古风原创-九公子已上线】",
                            "momentClassificationBackup": {
                                "workTitle": "【赤九玖】❀不染❀【古风原创-九公子已上线】",
                                "classification": "information"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/354d8a30252a408d96004501bd6d8289_rs_af558ca8c6f64bd297618eb49164e5b0.jpg"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 19,
                                "selledInventory": 19
                            },
                            "router": "wudao://dance365.com/detail/video_course?momentId=5c5cb1593e4b402888871d765c5f5dec&resourceId=f10239ede7da483f9f34c513fc0edb00&source=recommend_other",
                            "subject": "video_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 1,
                                "lockCount": 19,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 30,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 3,
                                "shareAmount": "26.6",
                                "commentCount": 4,
                                "shareCount": 34,
                                "requireAccessoryCount": 2,
                                "reviewCount": 0,
                                "sellAmount": 532,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 19,
                                "viewCount": 4293,
                                "actualSellCount": 19,
                                "liveStatus": 0,
                                "favoriteCount": 135,
                                "requireMajorCourseCount": 1,
                                "userCacheCount": 162
                            },
                            "editHighestVersion": "5.7.0",
                            "id": "5c5cb1593e4b402888871d765c5f5dec",
                            "title": "原创舞蹈《人间烟火》",
                            "momentClassificationBackup": {
                                "workTitle": "原创舞蹈《人间烟火》",
                                "classification": "video_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/58fb2eaeac44418bb606f262026b560d.jpg"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 5,
                                "virtualInventory": 0,
                                "availableInventory": 5,
                                "orderOccupiedInventory": 0,
                                "selledInventory": 0
                            },
                            "router": "https://m.dance365.com/detail/major_course?momentId=b37525038820455eaaa86b183d0dc96c&resourceId=f10239ede7da483f9f34c513fc0edb00&source=recommend_other",
                            "subject": "major_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 202,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 0,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 0
                            },
                            "editHighestVersion": "5.7.6",
                            "id": "b37525038820455eaaa86b183d0dc96c",
                            "title": "百舞惊鸿 周末集训 多舞蹈选择",
                            "momentClassificationBackup": {
                                "workTitle": "百舞惊鸿 周末集训 多舞蹈选择",
                                "originalStatement": 0,
                                "classification": "major_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1588572305467_0895754710B84ABD9A912C570C9D437F"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 53,
                                "selledInventory": 35
                            },
                            "router": "https://m.dance365.com/detail/live_course?momentId=b23f37f76f204808a0f7868131c6b767&resourceId=f10239ede7da483f9f34c513fc0edb00&source=recommend_other",
                            "subject": "live_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 6,
                                "lockCount": 53,
                                "studentCount": 35,
                                "playBackDuration": 2206,
                                "praiseCount": 6,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": "106.04",
                                "commentCount": 7,
                                "shareCount": 20,
                                "requireAccessoryCount": 0,
                                "reviewCount": 4,
                                "sellAmount": "346.5",
                                "signupCount": 35,
                                "requireLiveCourseCount": 0,
                                "sellCount": 35,
                                "viewCount": 24817,
                                "actualSellCount": 35,
                                "liveStatus": 0,
                                "favoriteCount": 74,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 1
                            },
                            "editHighestVersion": "4.9.0",
                            "id": "b23f37f76f204808a0f7868131c6b767",
                            "title": "唯美古典舞《霓裳羽衣》第一段分解教学及舞蹈介绍",
                            "momentClassificationBackup": {
                                "workTitle": "唯美古典舞《霓裳羽衣》第一段分解教学及舞蹈介绍"
                            }
                        }
                    ],
                    "relevancyAvocations": [
                        "热门舞蹈",
                        "城市舞集",
                        "古典舞",
                        "中国舞",
                        "舞蹈",
                        "舞蹈相关",
                        "民族舞"
                    ],
                    "remark": null,
                    "repeatRequest": null,
                    "requireBackup": [
                        {
                            "requireDesc": "求视频课",
                            "requireType": "video_course"
                        },
                        {
                            "requireDesc": "求配套用品",
                            "requireType": "accessory"
                        },
                        {
                            "requireDesc": "求线下课",
                            "requireType": "major_course"
                        }
                    ],
                    "router": "wudao://dance365.com/detail/video?momentId=f10239ede7da483f9f34c513fc0edb00",
                    "securityAuditResult": null,
                    "securityStatus": 3,
                    "shelfTime": null,
                    "statisticsBackup": {
                        "actualSellCount": 0,
                        "commentCount": 4,
                        "enquiryCount": 0,
                        "exposureCount": 0,
                        "favoriteCount": 546,
                        "liveStatus": 0,
                        "lockCount": 0,
                        "playBackDuration": 0,
                        "praiseCount": 166,
                        "requireAccessoryCount": 30,
                        "requireLiveCourseCount": 0,
                        "requireMajorCourseCount": 32,
                        "requireMusicCount": 0,
                        "requireVideoCourseCount": 140,
                        "reviewCount": 0,
                        "sellAmount": 0,
                        "sellCount": 0,
                        "shareAmount": 0,
                        "shareCount": 172,
                        "signupCount": 0,
                        "studentCount": 0,
                        "userCacheCount": 413,
                        "viewCount": 12559
                    },
                    "status": "3",
                    "studyProgressBackup": [],
                    "subject": "video",
                    "subjectTag": null,
                    "summary": "城市舞集中国舞老师朱展凤原创编舞作品",
                    "tags": [
                        {
                            "groupType": "channel",
                            "name": "舞蹈",
                            "id": "DanceChannel"
                        },
                        {
                            "groupType": "avocation",
                            "name": "热门舞蹈",
                            "id": "ff808081683f378701687690e06e66ac"
                        },
                        {
                            "groupType": "avocation",
                            "name": "城市舞集",
                            "id": "ff80808178f77c5901790e6ea7a52ae3"
                        },
                        {
                            "groupType": "avocation",
                            "name": "古典舞",
                            "id": "402881ed649d628e01649d636ea7005b"
                        }
                    ],
                    "targetStatus": null,
                    "ticket": null,
                    "title": "热门古风舞蹈编舞《人间烟火》 视频教程已上线",
                    "topicQuoteInfos": [],
                    "updateTime": null,
                    "version": 5,
                    "vipTag": null,
                    "vipTitleBackup": null,
                    "visiblePermissions": "all",
                    "webUrl": "https://m.dance365.com/detail/video?momentId=f10239ede7da483f9f34c513fc0edb00&share=share",
                    "wordFilterStatus": "pass"
                },
                {
                    "addressChanged": false,
                    "addressConfirmRemind": false,
                    "aiyigeApplication": null,
                    "auditMsg": [],
                    "auditStatus": null,
                    "auditTime": null,
                    "auditor": null,
                    "auditorName": null,
                    "categoryId": null,
                    "channel": "DanceChannel",
                    "cityId": "402881bb60f8eae00160f8eb008b01d5",
                    "cityName": "海口",
                    "classification": "information",
                    "commodityBackup": {
                        "commissionAmount": null,
                        "commissionRate": null,
                        "commissionType": null,
                        "originPrice": "0.0",
                        "price": "0.0",
                        "showLinePrice": false,
                        "unitPrice": "0.0"
                    },
                    "courseEnded": null,
                    "cover": [
                        "https://rs.dance365.com/photo/96d3f9222f0249d29077aaae633f4e65_rs_f67dcabf1ae446f896f821a73fe4574f.jpg"
                    ],
                    "createTime": 1661275724354,
                    "creator": "487035",
                    "creatorBackup": {
                        "accid": "b6d59ea505f0adc827845006a056e5b5",
                        "avatar": "https://rs.dance365.com/photo/8d50c1f08d344b5f9c0c667b45bf461e_rs_67dd70e3879d4ed7927bf8b29e73acc7.jpg",
                        "certificationType": "personal",
                        "id": "487035",
                        "level": 6,
                        "mobile": null,
                        "name": "蓝迪斯",
                        "recentSellerFavorableValue": -1.0,
                        "recomFactor": null,
                        "recomFactorExpireTime": null,
                        "sellerFavorableValue": -1.0,
                        "type": null,
                        "vipExpireTime": null,
                        "vipGrade": 0
                    },
                    "depositAmount": 0.0,
                    "detailBackup": {
                        "content": [],
                        "guarantee": []
                    },
                    "divisionBackup": null,
                    "editHighestVersion": null,
                    "enclosureCount": 0,
                    "enclosures": [],
                    "esSyncStatus": null,
                    "esid": null,
                    "esidBackup": null,
                    "favorableValue": null,
                    "forceUpdate": 0,
                    "freshnessDegree": null,
                    "hasLiveBroadcast": 0,
                    "id": "1ae4db2685c34ad5a48ace9650225dae",
                    "imageTitleBackup": null,
                    "initExposureNum": null,
                    "inventoryBackup": null,
                    "letBuy": null,
                    "likabilityDegree": null,
                    "liveBroadcast": null,
                    "liveBroadcastTitles": [],
                    "mediaSummary": {
                        "count": 1,
                        "duration": 415808
                    },
                    "mineBackup": {
                        "accessoryRequired": 0,
                        "buyed": 0,
                        "commented": 0,
                        "favoriteId": null,
                        "iosDeviceVip": 0,
                        "letInLiveCourse": 0,
                        "liveCourseRequired": 0,
                        "majorCourseRequired": 0,
                        "musicRequired": 0,
                        "mutualFollower": false,
                        "praiseId": null,
                        "resourceFrom": null,
                        "roomRole": null,
                        "userFollowId": null,
                        "videoCourseRequired": 0
                    },
                    "momentClassificationBackup": {
                        "workTitle": "第十三届荷花奖《云上》",
                        "classification": "information"
                    },
                    "moreBackup": {
                        "videoCount": 1,
                        "totalDuration": 415808,
                        "allowExtractAudio": 1,
                        "videos": [
                            {
                                "cover": "https://rs.dance365.com/photo/96d46ffa010e45239b2e8849fcb8b0f7_rs_7fc64a7e65c04f0e86429397bc4ae24c.jpg",
                                "duration": 415808,
                                "size": 160456708,
                                "originUrl": "",
                                "sortNum": 0,
                                "free": 1,
                                "title": "第十三届荷花奖《云上》",
                                "url": "",
                                "hlsUrl": "https://rs.dance365.com/video/46d33dac67e14463af500b4eb3701170_rs_c5f015b173bd4fa6a85a894017a12a74v3r7.m3u8"
                            }
                        ]
                    },
                    "num": null,
                    "onSalesBackup": null,
                    "onsellTime": 1661275815040,
                    "onsellUpdateTime": 1661275815040,
                    "priorityDisplay": null,
                    "priorityDisplayTime": null,
                    "processTime": null,
                    "rand": null,
                    "recDegree": null,
                    "recentFavorableValue": null,
                    "recommendActivityAndTopic": [],
                    "recommendMineBackup": [
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/94fb18a5cd244f65825bf8f8487ba278_rs_bbcc49e4ad034a708bccf0a736f9a2f7.jpg"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=676379662a164045837c6b169d5af88a&resourceId=1ae4db2685c34ad5a48ace9650225dae&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 2,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 97,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 3,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 1
                            },
                            "editHighestVersion": "5.7.2",
                            "id": "676379662a164045837c6b169d5af88a",
                            "title": "第十三届荷花奖《走祥云》",
                            "momentClassificationBackup": {
                                "workTitle": "第十三届荷花奖《走祥云》",
                                "classification": "information"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/893299a0ed944236941eb37bf6e17cfb_rs_ee9f4e9c7be8481e87555b5fe075bf78.jpg"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=c993ad73d40c4831b71f220a6e1ad706&resourceId=1ae4db2685c34ad5a48ace9650225dae&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 3,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 1,
                                "shareCount": 5,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 710,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 16,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 3
                            },
                            "editHighestVersion": "5.7.2",
                            "id": "c993ad73d40c4831b71f220a6e1ad706",
                            "title": "第十三届荷花奖《花语》",
                            "momentClassificationBackup": {
                                "workTitle": "第十三届荷花奖《花语》",
                                "classification": "information"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/6a409b737a754e21aa85eb5596fe6c9e_rs_2b4244b980d9486bb273b66a1b5a51d9.jpg"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=4e5daf225c1a41279378c052663bfc0a&resourceId=1ae4db2685c34ad5a48ace9650225dae&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 1,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 1,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 136,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 5,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 0
                            },
                            "editHighestVersion": "5.7.2",
                            "id": "4e5daf225c1a41279378c052663bfc0a",
                            "title": "第十三届荷花奖《瑶山夜语》",
                            "momentClassificationBackup": {
                                "originAuthor": "周波、朱敦营、全凯强、黄桂英",
                                "originSource": "original",
                                "workTitle": "第十三届荷花奖《瑶山夜语》",
                                "originalStatement": 0,
                                "classification": "original"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/fc88a809fddd417e9768d16b279cd056_rs_9f2e73759a2d4796a17f8d1c4f8c672e.jpg"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=bd3d7564bf124d0c94655c83ba22b35a&resourceId=1ae4db2685c34ad5a48ace9650225dae&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 1,
                                "requireVideoCourseCount": 2,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 1,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 196,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 6,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 1
                            },
                            "editHighestVersion": "5.7.2",
                            "id": "bd3d7564bf124d0c94655c83ba22b35a",
                            "title": "第十三届荷花奖《走》",
                            "momentClassificationBackup": {
                                "workTitle": "第十三届荷花奖《走》",
                                "classification": "information"
                            }
                        }
                    ],
                    "recommendOtherBackup": [
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/xxx_1554084312381_1554084307018.jpg"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=1af75bc2c7464dcf8bc76e2de8145e59&resourceId=1ae4db2685c34ad5a48ace9650225dae&source=recommend_other",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "enquiryCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 7,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 6,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "sellCount": 0,
                                "requireLiveCourseCount": 0,
                                "viewCount": 787,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 14,
                                "requireMajorCourseCount": 1,
                                "userCacheCount": 8
                            },
                            "id": "1af75bc2c7464dcf8bc76e2de8145e59",
                            "title": "第十一届中国舞蹈“荷花奖”现代舞获奖作品 《云上》",
                            "momentClassificationBackup": {
                                "workTitle": "第十一届中国舞蹈“荷花奖”现代舞获奖作品 《云上》",
                                "classification": "information"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1529b634-f248-4b47-ba62-7645f1b693c1.jpg"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 79,
                                "selledInventory": 64
                            },
                            "router": "wudao://dance365.com/detail/video_course?momentId=2d437ae5918f4affb411096ad8ac9e1c&resourceId=1ae4db2685c34ad5a48ace9650225dae&source=recommend_other",
                            "subject": "video_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 21,
                                "lockCount": 79,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 74,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 20,
                                "shareAmount": "7372.8",
                                "commentCount": 37,
                                "shareCount": 596,
                                "requireAccessoryCount": 25,
                                "reviewCount": 2,
                                "sellAmount": 20480,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 64,
                                "viewCount": 20532,
                                "actualSellCount": 64,
                                "liveStatus": 0,
                                "favoriteCount": 357,
                                "requireMajorCourseCount": 14,
                                "userCacheCount": 78
                            },
                            "editHighestVersion": "5.5.8",
                            "id": "2d437ae5918f4affb411096ad8ac9e1c",
                            "title": "晓宇原创舞蹈《故乡的云》教学视频",
                            "momentClassificationBackup": {
                                "workTitle": "晓宇原创舞蹈《故乡的云》教学视频",
                                "classification": "video_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1931bfba-2bee-49cf-900c-e9404da5190a.jpg"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 80,
                                "selledInventory": 990
                            },
                            "router": "https://m.dance365.com/detail/live_course?momentId=4f6a8bf5bdba4d5486a410d14492acf8&resourceId=1ae4db2685c34ad5a48ace9650225dae&source=recommend_other",
                            "subject": "live_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 5,
                                "lockCount": 80,
                                "studentCount": 990,
                                "playBackDuration": 4522,
                                "praiseCount": 23,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 5,
                                "shareCount": 59,
                                "requireAccessoryCount": 0,
                                "reviewCount": 39,
                                "sellAmount": 0,
                                "signupCount": 990,
                                "requireLiveCourseCount": 0,
                                "sellCount": 990,
                                "viewCount": 10621,
                                "actualSellCount": 990,
                                "liveStatus": 0,
                                "favoriteCount": 82,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 22
                            },
                            "editHighestVersion": "5.3.0",
                            "id": "4f6a8bf5bdba4d5486a410d14492acf8",
                            "title": "原创身韵地面综合组合《花水月》上",
                            "momentClassificationBackup": {
                                "workTitle": "原创身韵地面综合组合《花水月》上"
                            }
                        },
                        {
                            "cover": [
                                "https://images-la.dance365.com/IM1528252047993BEEEEECBCGIFEEKEE"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 36,
                                "virtualInventory": 0,
                                "availableInventory": 36,
                                "orderOccupiedInventory": 0,
                                "selledInventory": 0
                            },
                            "router": "https://m.dance365.com/detail/major_course?momentId=bd984821eae4427b8b8916466fc0ba5c&resourceId=1ae4db2685c34ad5a48ace9650225dae&source=recommend_other",
                            "subject": "major_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 1,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 1119,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 2,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 0
                            },
                            "editHighestVersion": "5.6.12",
                            "id": "bd984821eae4427b8b8916466fc0ba5c",
                            "title": "北舞中国舞教师考级培训（11月10级）",
                            "momentClassificationBackup": {
                                "workTitle": "北舞中国舞教师考级培训（11月10级）",
                                "classification": "major_course"
                            }
                        }
                    ],
                    "relevancyAvocations": [
                        "群舞",
                        "荷花奖",
                        "舞蹈比赛",
                        "舞蹈相关",
                        "古典舞",
                        "舞蹈",
                        "舞蹈"
                    ],
                    "remark": null,
                    "repeatRequest": null,
                    "requireBackup": [
                        {
                            "requireDesc": "求视频课",
                            "requireType": "video_course"
                        },
                        {
                            "requireDesc": "求配套用品",
                            "requireType": "accessory"
                        },
                        {
                            "requireDesc": "求线下课",
                            "requireType": "major_course"
                        }
                    ],
                    "router": "wudao://dance365.com/detail/video?momentId=1ae4db2685c34ad5a48ace9650225dae",
                    "securityAuditResult": null,
                    "securityStatus": 3,
                    "shelfTime": null,
                    "statisticsBackup": {
                        "actualSellCount": 0,
                        "commentCount": 0,
                        "enquiryCount": 0,
                        "exposureCount": 0,
                        "favoriteCount": 11,
                        "liveStatus": 0,
                        "lockCount": 0,
                        "playBackDuration": 0,
                        "praiseCount": 2,
                        "requireAccessoryCount": 0,
                        "requireLiveCourseCount": 0,
                        "requireMajorCourseCount": 1,
                        "requireMusicCount": 0,
                        "requireVideoCourseCount": 0,
                        "reviewCount": 0,
                        "sellAmount": 0,
                        "sellCount": 0,
                        "shareAmount": 0,
                        "shareCount": 6,
                        "signupCount": 0,
                        "studentCount": 0,
                        "userCacheCount": 18,
                        "viewCount": 427
                    },
                    "status": "3",
                    "studyProgressBackup": [],
                    "subject": "video",
                    "subjectTag": null,
                    "summary": "《云上》四川省歌舞剧院有限责任公司。第十三届中国舞蹈荷花奖展演第三场（9）",
                    "tags": [
                        {
                            "groupType": "avocation",
                            "name": "群舞",
                            "id": "ff80808167c026c90167c06ba8e914b1"
                        },
                        {
                            "groupType": "avocation",
                            "name": "荷花奖",
                            "id": "ff80808169e335260169f875454f346a"
                        },
                        {
                            "groupType": "avocation",
                            "name": "舞蹈比赛",
                            "id": "ff80808167e53df20167e853b3c963b5"
                        }
                    ],
                    "targetStatus": null,
                    "ticket": null,
                    "title": "第十三届荷花奖《云上》",
                    "topicQuoteInfos": [],
                    "updateTime": null,
                    "version": 3,
                    "vipTag": null,
                    "vipTitleBackup": null,
                    "visiblePermissions": "all",
                    "webUrl": "https://m.dance365.com/detail/video?momentId=1ae4db2685c34ad5a48ace9650225dae&share=share",
                    "wordFilterStatus": "pass"
                },
                {
                    "addressChanged": false,
                    "addressConfirmRemind": false,
                    "aiyigeApplication": null,
                    "auditMsg": [],
                    "auditStatus": null,
                    "auditTime": null,
                    "auditor": null,
                    "auditorName": null,
                    "categoryId": null,
                    "channel": "DanceChannel",
                    "cityId": "402881bb60f8eae00160f8eafd7d0137",
                    "cityName": "南京",
                    "classification": "original",
                    "commodityBackup": {
                        "commissionAmount": null,
                        "commissionRate": null,
                        "commissionType": null,
                        "originPrice": "0.0",
                        "price": "0.0",
                        "showLinePrice": false,
                        "unitPrice": "0.0"
                    },
                    "courseEnded": null,
                    "cover": [
                        "https://rs.dance365.com/photo/1665129450058_rs_1665129454265"
                    ],
                    "createTime": 1665129535919,
                    "creator": "ff80808181d26a1e0181d2ef4cd13437",
                    "creatorBackup": {
                        "accid": "9b8635471d3a34294fe029c1e32cbfda",
                        "avatar": "https://rs.dance365.com/photo/1622709885157_rs_1657181236152",
                        "certificationType": null,
                        "id": "ff80808181d26a1e0181d2ef4cd13437",
                        "level": 7,
                        "mobile": null,
                        "name": "城市舞集韩舞爵士舞",
                        "recentSellerFavorableValue": -1.0,
                        "recomFactor": null,
                        "recomFactorExpireTime": null,
                        "sellerFavorableValue": -1.0,
                        "type": null,
                        "vipExpireTime": null,
                        "vipGrade": 0
                    },
                    "depositAmount": 0.0,
                    "detailBackup": {
                        "content": [],
                        "guarantee": []
                    },
                    "divisionBackup": null,
                    "editHighestVersion": null,
                    "enclosureCount": 0,
                    "enclosures": [],
                    "esSyncStatus": null,
                    "esid": null,
                    "esidBackup": null,
                    "favorableValue": -1.0,
                    "forceUpdate": 0,
                    "freshnessDegree": null,
                    "hasLiveBroadcast": 0,
                    "id": "8b39a7f062ad4f66af10a83fe7ff774a",
                    "imageTitleBackup": null,
                    "initExposureNum": null,
                    "inventoryBackup": null,
                    "letBuy": null,
                    "likabilityDegree": null,
                    "liveBroadcast": null,
                    "liveBroadcastTitles": [],
                    "mediaSummary": {
                        "count": 1,
                        "duration": 81386
                    },
                    "mineBackup": {
                        "accessoryRequired": 0,
                        "buyed": 0,
                        "commented": 0,
                        "favoriteId": null,
                        "iosDeviceVip": 0,
                        "letInLiveCourse": 0,
                        "liveCourseRequired": 0,
                        "majorCourseRequired": 0,
                        "musicRequired": 0,
                        "mutualFollower": false,
                        "praiseId": null,
                        "resourceFrom": null,
                        "roomRole": null,
                        "userFollowId": null,
                        "videoCourseRequired": 0
                    },
                    "momentClassificationBackup": {
                        "originAuthor": "小青",
                        "originSource": "original",
                        "workTitle": "夏天就要过去 这支《粉红色的回忆》送给你",
                        "originalStatement": 0,
                        "classification": "original"
                    },
                    "moreBackup": {
                        "videoCount": 1,
                        "totalDuration": 81386,
                        "allowExtractAudio": 1,
                        "videos": [
                            {
                                "cover": "https://rs.dance365.com/photo/5e09418a6573b02e4305ae286702e1a4.jpg",
                                "duration": 81386,
                                "size": 180141953,
                                "originUrl": "",
                                "free": "1",
                                "title": "《粉红色的回忆》",
                                "url": "",
                                "hlsUrl": "https://rs.dance365.com/video/1665129380697_rs_592c4c8861fe4d82a0aba0d6746174eethfi.m3u8"
                            }
                        ]
                    },
                    "num": null,
                    "onSalesBackup": null,
                    "onsellTime": 1665129483381,
                    "onsellUpdateTime": 1665129483381,
                    "priorityDisplay": null,
                    "priorityDisplayTime": null,
                    "processTime": null,
                    "rand": null,
                    "recDegree": null,
                    "recentFavorableValue": -1.0,
                    "recommendActivityAndTopic": [],
                    "recommendMineBackup": [
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1665212346558_rs_1665212349628"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=2483cada19014124a4823204e21d2cfc&resourceId=8b39a7f062ad4f66af10a83fe7ff774a&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 3,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 112,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 1,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 2
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "2483cada19014124a4823204e21d2cfc",
                            "title": "谁能拒绝这支又甜又辣的舞蹈《polaroid love》，喊上闺蜜一起学~",
                            "momentClassificationBackup": {
                                "originAuthor": "小爱 崔阳",
                                "originSource": "original",
                                "workTitle": "谁能拒绝这支又甜又辣的舞蹈《polaroid love》，喊上闺蜜一起学~",
                                "originalStatement": 0,
                                "classification": "original"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1660533544268_rs_1660533548771"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=edf64a620ee54260ade087871b409645&resourceId=8b39a7f062ad4f66af10a83fe7ff774a&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 3,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 414,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 5,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 5
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "edf64a620ee54260ade087871b409645",
                            "title": "这个编舞一眼就爱上了！可爱又魔性的歌曲《Darari Sped Up》",
                            "momentClassificationBackup": {
                                "originAuthor": "秦停停",
                                "originSource": "original",
                                "workTitle": "这个编舞一眼就爱上了！可爱又魔性的歌曲《Darari Sped Up》",
                                "originalStatement": 0,
                                "classification": "original"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1665133628652_rs_1665133631490"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=5c3098f047e242ecb038eaf71266d17c&resourceId=8b39a7f062ad4f66af10a83fe7ff774a&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 1,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 175,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 1,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 5
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "5c3098f047e242ecb038eaf71266d17c",
                            "title": "酷女孩给我看过来！城市舞集爵士舞编舞《Link Up》，好拽我好爱",
                            "momentClassificationBackup": {
                                "originAuthor": "琪琦",
                                "originSource": "original",
                                "workTitle": "酷女孩给我看过来！城市舞集爵士舞编舞《Link Up》，好拽我好爱",
                                "originalStatement": 0,
                                "classification": "original"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1663647098031_rs_1663647102188"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=27c2e7390b314e17b7e38df9a6d13ab5&resourceId=8b39a7f062ad4f66af10a83fe7ff774a&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 1,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 162,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 2,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 3
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "27c2e7390b314e17b7e38df9a6d13ab5",
                            "title": "酷飒粉墨风《Pink Venom》，看得好过瘾！爱惨了！",
                            "momentClassificationBackup": {
                                "originAuthor": "blackpink",
                                "originSource": "original",
                                "workTitle": "酷飒粉墨风《Pink Venom》，看得好过瘾！爱惨了！",
                                "originalStatement": 0,
                                "classification": "original"
                            }
                        }
                    ],
                    "recommendOtherBackup": [
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/ff8080816f693fc8016f6970d94e11d3_1578117714301_58879DF4C4674DEC8096423777D90522"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=8e706506d16d49f3819d588c336625aa&resourceId=8b39a7f062ad4f66af10a83fe7ff774a&source=recommend_other",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 2,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "sellCount": 0,
                                "requireLiveCourseCount": 0,
                                "viewCount": 365,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 1,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 2
                            },
                            "editHighestVersion": "5.1.0",
                            "id": "8e706506d16d49f3819d588c336625aa",
                            "title": "年会粉红色的回忆",
                            "momentClassificationBackup": {
                                "workTitle": "年会粉红色的回忆",
                                "classification": "freedom"
                            }
                        },
                        {
                            "cover": [
                                "https://photo.dance365.com/1485064724246SDLIWXA86XT31XV937F"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 1,
                                "selledInventory": 56
                            },
                            "router": "wudao://dance365.com/detail/video_course?momentId=275&resourceId=8b39a7f062ad4f66af10a83fe7ff774a&source=recommend_other",
                            "subject": "video_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "lockCount": 1,
                                "studentCount": 0,
                                "enquiryCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 33,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 1,
                                "shareAmount": 175,
                                "commentCount": 23,
                                "shareCount": 9,
                                "requireAccessoryCount": 0,
                                "reviewCount": 1,
                                "sellAmount": "1922.5",
                                "signupCount": 0,
                                "sellCount": 56,
                                "requireLiveCourseCount": 0,
                                "viewCount": 62528,
                                "actualSellCount": 56,
                                "liveStatus": 0,
                                "favoriteCount": 200,
                                "requireMajorCourseCount": 2,
                                "userCacheCount": 5
                            },
                            "editHighestVersion": "5.3.10",
                            "id": "275",
                            "title": "简单速成的女生表演舞蹈《better》舞蹈教学",
                            "momentClassificationBackup": {
                                "workTitle": "简单速成的女生表演舞蹈《better》舞蹈教学"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1613981943577_1613981929157"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 79,
                                "selledInventory": 100
                            },
                            "router": "https://m.dance365.com/detail/live_course?momentId=87f6eb6a5b024e4f921b382ddca83f90&resourceId=8b39a7f062ad4f66af10a83fe7ff774a&source=recommend_other",
                            "subject": "live_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 50,
                                "lockCount": 79,
                                "studentCount": 103,
                                "playBackDuration": 58171,
                                "praiseCount": 52,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": "3210.56",
                                "commentCount": 44,
                                "shareCount": 194,
                                "requireAccessoryCount": 0,
                                "reviewCount": 11,
                                "sellAmount": 7900,
                                "signupCount": 103,
                                "requireLiveCourseCount": 0,
                                "sellCount": 100,
                                "viewCount": 53340,
                                "actualSellCount": 100,
                                "liveStatus": 0,
                                "favoriteCount": 271,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 101
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "87f6eb6a5b024e4f921b382ddca83f90",
                            "title": "30天流行舞零基础训练营【天天跟我跳 · 练舞半小时 】",
                            "momentClassificationBackup": {
                                "workTitle": "30天流行舞零基础训练营【天天跟我跳 · 练舞半小时 】",
                                "classification": "live_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1652062020613_rs_1652062028100"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 10,
                                "virtualInventory": 0,
                                "availableInventory": 10,
                                "orderOccupiedInventory": 0,
                                "selledInventory": 0
                            },
                            "router": "https://m.dance365.com/detail/major_course?momentId=6a9384177b904fea864aa19867a86d74&resourceId=8b39a7f062ad4f66af10a83fe7ff774a&source=recommend_other",
                            "subject": "major_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 289,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 2,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 0
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "6a9384177b904fea864aa19867a86d74",
                            "title": "2022年11月《凤舞课堂》零基础基本功班报名通知",
                            "momentClassificationBackup": {
                                "workTitle": "2022年11月《凤舞课堂》零基础基本功班报名通知",
                                "classification": "major_course"
                            }
                        }
                    ],
                    "relevancyAvocations": [
                        "爵士舞",
                        "流行舞",
                        "原创编舞",
                        "舞蹈",
                        "舞蹈相关",
                        "流行热舞",
                        "街舞"
                    ],
                    "remark": null,
                    "repeatRequest": null,
                    "requireBackup": [
                        {
                            "requireDesc": "求视频课",
                            "requireType": "video_course"
                        },
                        {
                            "requireDesc": "求配套用品",
                            "requireType": "accessory"
                        },
                        {
                            "requireDesc": "求线下课",
                            "requireType": "major_course"
                        }
                    ],
                    "router": "wudao://dance365.com/detail/video?momentId=8b39a7f062ad4f66af10a83fe7ff774a",
                    "securityAuditResult": null,
                    "securityStatus": 3,
                    "shelfTime": null,
                    "statisticsBackup": {
                        "actualSellCount": 0,
                        "commentCount": 0,
                        "enquiryCount": 0,
                        "exposureCount": 0,
                        "favoriteCount": 2,
                        "liveStatus": 0,
                        "lockCount": 0,
                        "playBackDuration": 0,
                        "praiseCount": 0,
                        "requireAccessoryCount": 0,
                        "requireLiveCourseCount": 0,
                        "requireMajorCourseCount": 0,
                        "requireMusicCount": 0,
                        "requireVideoCourseCount": 1,
                        "reviewCount": 0,
                        "sellAmount": 0,
                        "sellCount": 0,
                        "shareAmount": 0,
                        "shareCount": 0,
                        "signupCount": 0,
                        "studentCount": 0,
                        "userCacheCount": 1,
                        "viewCount": 43
                    },
                    "status": "3",
                    "studyProgressBackup": [],
                    "subject": "video",
                    "subjectTag": null,
                    "summary": "城市舞集编舞：小青\n舞展：小青 崔阳 奶油 文晓 龙龙",
                    "tags": [
                        {
                            "groupType": "channel",
                            "name": "舞蹈",
                            "id": "DanceChannel"
                        },
                        {
                            "groupType": "avocation",
                            "name": "爵士舞",
                            "id": "402881ed649d628e01649d636ea70057"
                        },
                        {
                            "groupType": "avocation",
                            "name": "流行舞",
                            "id": "ff80808167d058740167d536d4653170"
                        },
                        {
                            "groupType": "avocation",
                            "name": "原创编舞",
                            "id": "ff80808167d9dd620167e457f899789a"
                        }
                    ],
                    "targetStatus": null,
                    "ticket": null,
                    "title": "夏天就要过去 这支《粉红色的回忆》送给你",
                    "topicQuoteInfos": [],
                    "updateTime": null,
                    "version": 3,
                    "vipTag": null,
                    "vipTitleBackup": null,
                    "visiblePermissions": "all",
                    "webUrl": "https://m.dance365.com/detail/video?momentId=8b39a7f062ad4f66af10a83fe7ff774a&share=share",
                    "wordFilterStatus": "pass"
                },
                {
                    "addressChanged": false,
                    "addressConfirmRemind": false,
                    "aiyigeApplication": null,
                    "auditMsg": [],
                    "auditStatus": null,
                    "auditTime": null,
                    "auditor": null,
                    "auditorName": null,
                    "categoryId": null,
                    "channel": "DanceChannel",
                    "cityId": null,
                    "cityName": null,
                    "classification": "original",
                    "commodityBackup": {
                        "commissionAmount": null,
                        "commissionRate": null,
                        "commissionType": null,
                        "originPrice": "0.0",
                        "price": "0.0",
                        "showLinePrice": false,
                        "unitPrice": "0.0"
                    },
                    "courseEnded": null,
                    "cover": [
                        "https://rs.dance365.com/photo/722098c0495b4ff9b363829247b5e13e_rs_3eeed438b9d043d7a2a49bcc80de3bdf.jpg"
                    ],
                    "createTime": 1662785985919,
                    "creator": "914444",
                    "creatorBackup": {
                        "accid": "6e88ad74708de52ead1c0d875c9e3d23",
                        "avatar": "https://rs.dance365.com/photo/5255cdd73cec4cb5886cae50e0c8c706_rs_b8f3461455a449c3823bbf6f9e75585d.jpg",
                        "certificationType": "organization",
                        "id": "914444",
                        "level": 14,
                        "mobile": null,
                        "name": "朋锴艺术",
                        "recentSellerFavorableValue": 4.6,
                        "recomFactor": null,
                        "recomFactorExpireTime": null,
                        "sellerFavorableValue": 4.6,
                        "type": null,
                        "vipExpireTime": null,
                        "vipGrade": 0
                    },
                    "depositAmount": 0.0,
                    "detailBackup": {
                        "content": [],
                        "guarantee": []
                    },
                    "divisionBackup": null,
                    "editHighestVersion": null,
                    "enclosureCount": 0,
                    "enclosures": [],
                    "esSyncStatus": null,
                    "esid": null,
                    "esidBackup": null,
                    "favorableValue": -1.0,
                    "forceUpdate": 0,
                    "freshnessDegree": null,
                    "hasLiveBroadcast": 0,
                    "id": "5ba6069f0b76485fbc250f2ffbacf662",
                    "imageTitleBackup": null,
                    "initExposureNum": null,
                    "inventoryBackup": null,
                    "letBuy": null,
                    "likabilityDegree": null,
                    "liveBroadcast": null,
                    "liveBroadcastTitles": [],
                    "mediaSummary": {
                        "count": 1,
                        "duration": 118295
                    },
                    "mineBackup": {
                        "accessoryRequired": 0,
                        "buyed": 0,
                        "commented": 0,
                        "favoriteId": null,
                        "iosDeviceVip": 0,
                        "letInLiveCourse": 0,
                        "liveCourseRequired": 0,
                        "majorCourseRequired": 0,
                        "musicRequired": 0,
                        "mutualFollower": false,
                        "praiseId": null,
                        "resourceFrom": null,
                        "roomRole": null,
                        "userFollowId": null,
                        "videoCourseRequired": 0
                    },
                    "momentClassificationBackup": {
                        "originAuthor": "朋锴艺术",
                        "originSource": "original",
                        "workTitle": "盛世华章",
                        "originalStatement": 1,
                        "classification": "original"
                    },
                    "moreBackup": {
                        "videoCount": 1,
                        "totalDuration": 118295,
                        "allowExtractAudio": 1,
                        "videos": [
                            {
                                "cover": "https://rs.dance365.com/photo/b5addcdb3d2c4e319d474270884764da_rs_fb7dffb296d045c58add9ca88adfdbb9.jpg",
                                "duration": 118295,
                                "size": 31754574,
                                "originUrl": "",
                                "sortNum": 0,
                                "free": 1,
                                "title": "盛世华章",
                                "url": "",
                                "hlsUrl": "https://rs.dance365.com/video/b1f47492029f4e918f4f6a79feaabfa1_rs_d9444b8aa49b48e7a8a0b5e0cce48d5do8rv.m3u8"
                            }
                        ]
                    },
                    "num": null,
                    "onSalesBackup": null,
                    "onsellTime": 1662786002626,
                    "onsellUpdateTime": 1662786002626,
                    "priorityDisplay": 0,
                    "priorityDisplayTime": null,
                    "processTime": null,
                    "rand": null,
                    "recDegree": null,
                    "recentFavorableValue": -1.0,
                    "recommendActivityAndTopic": [],
                    "recommendMineBackup": [
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1664598659457_rs_1664598663814"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 0,
                                "selledInventory": 1
                            },
                            "router": "wudao://dance365.com/detail/video_course?momentId=bbe1bb48aeb24ef1a1dcf2886be46756&resourceId=5ba6069f0b76485fbc250f2ffbacf662&source=recommend_mine",
                            "subject": "video_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 5,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 20,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 1,
                                "viewCount": 55,
                                "actualSellCount": 1,
                                "liveStatus": 0,
                                "favoriteCount": 3,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 0
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "bbe1bb48aeb24ef1a1dcf2886be46756",
                            "title": "中国古典舞“戏曲角色塑造”《旖旎娉婷》",
                            "momentClassificationBackup": {
                                "workTitle": "中国古典舞“戏曲角色塑造”《旖旎娉婷》",
                                "classification": "video_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/ba4232c0a24a48b484d9c26b7e76706e_rs_36834623bbdd4adc96e7b0a45d847e8f.jpg"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=8da9ef428e71406289001979dba0856b&resourceId=5ba6069f0b76485fbc250f2ffbacf662&source=recommend_mine",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 1,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 266,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 8,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 5
                            },
                            "editHighestVersion": "5.7.4",
                            "id": "8da9ef428e71406289001979dba0856b",
                            "title": "含腆",
                            "momentClassificationBackup": {
                                "originAuthor": "朋锴艺术",
                                "workTitle": "含腆",
                                "originalStatement": 1,
                                "classification": "course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1664595621374_rs_1664595631499"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 0,
                                "selledInventory": 0
                            },
                            "router": "wudao://dance365.com/detail/video_course?momentId=c48418f40f7f4bc6a58c9d3b0460ed9f&resourceId=5ba6069f0b76485fbc250f2ffbacf662&source=recommend_mine",
                            "subject": "video_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 33,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 1,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 0
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "c48418f40f7f4bc6a58c9d3b0460ed9f",
                            "title": "中国古典舞身韵基础训练【进阶】《坐之相》",
                            "momentClassificationBackup": {
                                "workTitle": "中国古典舞身韵基础训练【进阶】《坐之相》",
                                "classification": "video_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/xxx_1584772723296_1584772712855"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 11,
                                "selledInventory": 21
                            },
                            "router": "wudao://dance365.com/detail/video_course?momentId=172f242cb8f04fe586d38d9844d1e573&resourceId=5ba6069f0b76485fbc250f2ffbacf662&source=recommend_mine",
                            "subject": "video_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 2,
                                "lockCount": 11,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 32,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 1,
                                "shareAmount": "1007.56",
                                "commentCount": 12,
                                "shareCount": 46,
                                "requireAccessoryCount": 3,
                                "reviewCount": 2,
                                "sellAmount": "2238.9",
                                "signupCount": 0,
                                "sellCount": 21,
                                "requireLiveCourseCount": 0,
                                "viewCount": 4740,
                                "actualSellCount": 21,
                                "liveStatus": 0,
                                "favoriteCount": 171,
                                "requireMajorCourseCount": 2,
                                "userCacheCount": 78
                            },
                            "editHighestVersion": "5.7.1",
                            "id": "172f242cb8f04fe586d38d9844d1e573",
                            "title": "维吾尔族舞蹈基础训练",
                            "momentClassificationBackup": {
                                "workTitle": "维吾尔族舞蹈基础训练"
                            }
                        }
                    ],
                    "recommendOtherBackup": [
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/ebd2058dd61b4ffdb236fd623dc5faf3_rs_5bc11057ffdb40cb8c5ee9a0bb49d828.jpg"
                            ],
                            "router": "wudao://dance365.com/detail/video?momentId=5831fb0a46324185853a4fc58fd34fc8&resourceId=5ba6069f0b76485fbc250f2ffbacf662&source=recommend_other",
                            "subject": "video",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 1,
                                "requireAccessoryCount": 1,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 163,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 9,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 6
                            },
                            "editHighestVersion": "5.7.4",
                            "id": "5831fb0a46324185853a4fc58fd34fc8",
                            "title": "波澜壮阔，盛世华章《我的祖国》礼献中华",
                            "momentClassificationBackup": {
                                "originAuthor": "华云舞蹈工作室",
                                "originSource": "original",
                                "workTitle": "波澜壮阔，盛世华章《我的祖国》礼献中华",
                                "originalStatement": 1,
                                "classification": "original"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/73dadc1b-6b13-48ac-a44d-ddb998a5b3d3.jpg"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 29,
                                "selledInventory": 34
                            },
                            "router": "wudao://dance365.com/detail/video_course?momentId=e04c130c4a0045899f6b6704226e3f66&resourceId=5ba6069f0b76485fbc250f2ffbacf662&source=recommend_other",
                            "subject": "video_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 17,
                                "lockCount": 29,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 119,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 26,
                                "shareAmount": "632.78",
                                "commentCount": 8,
                                "shareCount": 538,
                                "requireAccessoryCount": 14,
                                "reviewCount": 1,
                                "sellAmount": "2840.3",
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 34,
                                "viewCount": 19802,
                                "actualSellCount": 34,
                                "liveStatus": 0,
                                "favoriteCount": 735,
                                "requireMajorCourseCount": 6,
                                "userCacheCount": 270
                            },
                            "editHighestVersion": "5.6.0",
                            "id": "e04c130c4a0045899f6b6704226e3f66",
                            "title": "开场舞《盛世欢歌》",
                            "momentClassificationBackup": {
                                "workTitle": "开场舞《盛世欢歌》",
                                "classification": "video_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1622646296654_976AD747E7E24743B107C435DDC76469"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 100,
                                "virtualInventory": 0,
                                "availableInventory": 100,
                                "orderOccupiedInventory": 2,
                                "selledInventory": 0
                            },
                            "router": "https://m.dance365.com/detail/live_course?momentId=9f5031b1d49e460e9b1599c80ba3ae72&resourceId=5ba6069f0b76485fbc250f2ffbacf662&source=recommend_other",
                            "subject": "live_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 1,
                                "lockCount": 2,
                                "studentCount": 1,
                                "playBackDuration": 21678,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 1,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 2332,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 13,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 0
                            },
                            "editHighestVersion": "5.5.1",
                            "id": "9f5031b1d49e460e9b1599c80ba3ae72",
                            "title": "2021完整版古典舞《韶华》",
                            "momentClassificationBackup": {
                                "workTitle": "2021完整版古典舞《韶华》",
                                "classification": "live_course"
                            }
                        },
                        {
                            "cover": [
                                "https://rs.dance365.com/photo/1665823052293_rs_1665823066215"
                            ],
                            "inventoryBackup": {
                                "lockedInventory": 0,
                                "total": 10,
                                "virtualInventory": 0,
                                "availableInventory": 10,
                                "orderOccupiedInventory": 0,
                                "selledInventory": 0
                            },
                            "router": "https://m.dance365.com/detail/major_course?momentId=9a2c4c14fb514af48aa294b946a6ee88&resourceId=5ba6069f0b76485fbc250f2ffbacf662&source=recommend_other",
                            "subject": "major_course",
                            "statisticsBackup": {
                                "exposureCount": 0,
                                "enquiryCount": 0,
                                "lockCount": 0,
                                "studentCount": 0,
                                "playBackDuration": 0,
                                "praiseCount": 0,
                                "requireVideoCourseCount": 0,
                                "requireMusicCount": 0,
                                "shareAmount": 0,
                                "commentCount": 0,
                                "shareCount": 0,
                                "requireAccessoryCount": 0,
                                "reviewCount": 0,
                                "sellAmount": 0,
                                "signupCount": 0,
                                "requireLiveCourseCount": 0,
                                "sellCount": 0,
                                "viewCount": 109,
                                "actualSellCount": 0,
                                "liveStatus": 0,
                                "favoriteCount": 0,
                                "requireMajorCourseCount": 0,
                                "userCacheCount": 0
                            },
                            "editHighestVersion": "5.7.6",
                            "id": "9a2c4c14fb514af48aa294b946a6ee88",
                            "title": "第三期：CEFA中国古典舞-袖舞专业大师班",
                            "momentClassificationBackup": {
                                "workTitle": "第三期：CEFA中国古典舞-袖舞专业大师班",
                                "classification": "major_course"
                            }
                        }
                    ],
                    "relevancyAvocations": [
                        "中国舞",
                        "舞蹈",
                        "古典舞",
                        "舞蹈相关",
                        "舞蹈相关",
                        "舞蹈相关",
                        "民族舞"
                    ],
                    "remark": null,
                    "repeatRequest": null,
                    "requireBackup": [
                        {
                            "requireDesc": "求视频课",
                            "requireType": "video_course"
                        },
                        {
                            "requireDesc": "求配套用品",
                            "requireType": "accessory"
                        },
                        {
                            "requireDesc": "求线下课",
                            "requireType": "major_course"
                        }
                    ],
                    "router": "wudao://dance365.com/detail/video?momentId=5ba6069f0b76485fbc250f2ffbacf662",
                    "securityAuditResult": null,
                    "securityStatus": 3,
                    "shelfTime": null,
                    "statisticsBackup": {
                        "actualSellCount": 0,
                        "commentCount": 0,
                        "enquiryCount": 0,
                        "exposureCount": 0,
                        "favoriteCount": 19,
                        "liveStatus": 0,
                        "lockCount": 0,
                        "playBackDuration": 0,
                        "praiseCount": 10,
                        "requireAccessoryCount": 0,
                        "requireLiveCourseCount": 0,
                        "requireMajorCourseCount": 0,
                        "requireMusicCount": 0,
                        "requireVideoCourseCount": 2,
                        "reviewCount": 0,
                        "sellAmount": 0,
                        "sellCount": 0,
                        "shareAmount": 0,
                        "shareCount": 7,
                        "signupCount": 0,
                        "studentCount": 0,
                        "userCacheCount": 9,
                        "viewCount": 1182
                    },
                    "status": "3",
                    "studyProgressBackup": [],
                    "subject": "video",
                    "subjectTag": null,
                    "summary": "占位酒泛恩波，香凝瑞彩，笙歌鼎沸华堂。簪缨济济，拜手祝君王。好是重华盛世，康衢里、争颂陶唐。",
                    "tags": [
                        {
                            "groupType": "avocation",
                            "name": "中国舞",
                            "id": "ff80808167bef94f0167bf6f6e0a1fd2"
                        },
                        {
                            "groupType": "avocation",
                            "name": "舞蹈",
                            "id": "ff80808167cb37250167cc06bbec356a"
                        },
                        {
                            "groupType": "avocation",
                            "name": "古典舞",
                            "id": "402881ed649d628e01649d636ea7005b"
                        }
                    ],
                    "targetStatus": null,
                    "ticket": null,
                    "title": "盛世华章",
                    "topicQuoteInfos": [],
                    "updateTime": null,
                    "version": 3,
                    "vipTag": null,
                    "vipTitleBackup": null,
                    "visiblePermissions": "all",
                    "webUrl": "https://m.dance365.com/detail/video?momentId=5ba6069f0b76485fbc250f2ffbacf662&share=share",
                    "wordFilterStatus": "pass"
                }
            ]
        }
    }
})