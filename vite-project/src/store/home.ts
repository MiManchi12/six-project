import { defineStore } from "pinia";
import { reqGetRecommendList, reqGetOriginalList, reqGetCourseList, reqGetSpecialTopicList, reqGetInformationList } from '../api/home/index'

export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            recommendcontent: [],
            originalcontent: [],
            coursecontent: [],
            specialTopiccontent: [],
            informationcontent: [],
        }
    },
    actions: {
        async getRecommendList({ column, pageNum, localCache }) {
            let params = {
                access_token: 'c494ae44-3adc-48ca-8749-5128a53358d7',
                column,
                pageSize: 20,
                pageNum,
                localCache
            }
            let result = await reqGetRecommendList(params)
            this.recommendcontent = this.recommendcontent.concat(result.content)
            this.originalcontent = []
            this.coursecontent = []
            this.specialTopiccontent = []
            this.informationcontent = []
        },
        async GetOriginalList({ column, pageNum }) {
            let params = {
                access_token: 'c494ae44-3adc-48ca-8749-5128a53358d7',
                column,
                pageSize: 20,
                pageNum,

            }
            let result = await reqGetOriginalList(params)
            this.originalcontent = this.originalcontent.concat(result.content)
            this.recommendcontent = []
            this.coursecontent = []
            this.specialTopiccontent = []
            this.informationcontent = []
        },
        async GetCourseList({ column, pageNum }) {
            let params = {
                access_token: 'c494ae44-3adc-48ca-8749-5128a53358d7',
                column,
                pageSize: 20,
                pageNum,

            }
            let result = await reqGetCourseList(params)
            this.coursecontent = this.coursecontent.concat(result.content)
            this.recommendcontent = []
            this.originalcontent = []
            this.specialTopiccontent = []
            this.informationcontent = []
        },
        async GetSpecialTopicList({ column, pageNum }) {
            let params = {
                access_token: 'c494ae44-3adc-48ca-8749-5128a53358d7',
                column,
                pageSize: 20,
                pageNum,

            }
            let result = await reqGetSpecialTopicList(params)
            this.specialTopiccontent = this.specialTopiccontent.concat(result.content)
            this.recommendcontent = []
            this.originalcontent = []
            this.coursecontent = []
            this.informationcontent = []
        },
        async GetInformationList({ column, pageNum }) {
            let params = {
                access_token: 'c494ae44-3adc-48ca-8749-5128a53358d7',
                column,
                pageSize: 20,
                pageNum,

            }
            let result = await reqGetInformationList(params)
            this.informationcontent = this.informationcontent.concat(result.content)
            this.recommendcontent = []
            this.originalcontent = []
            this.coursecontent = []
            this.specialTopiccontent = []
        },
    }

})
