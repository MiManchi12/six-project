import { defineStore } from "pinia";
import { reqGetRecommendList } from '../api/home/index'

export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            content: []
        }
    },
    actions: {
        async getRecommendList({column, pageNum, localCache}) {
            let params = {
                access_token: 'c494ae44-3adc-48ca-8749-5128a53358d7',
                column,
                pageSize: 20,
                pageNum,
                localCache
            }
            let result = await reqGetRecommendList(params)
            this.content =  this.content.concat(result.data.content)


        }
    }

})