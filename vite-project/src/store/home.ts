import { defineStore } from "pinia";
import { reqGetRecommendList } from '../api/home/index'

export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            content: []
        }
    },
    actions: {
        async getRecommendList() {
            let params = {
                access_token: 'c494ae44-3adc-48ca-8749-5128a53358d7',
                column: 'recommend',
                pageSize: 20,
                pageNum: 0,
                localCache: 0
            }
            let result = await reqGetRecommendList(params)
            this.content = result.data.content


        },
    }

})
