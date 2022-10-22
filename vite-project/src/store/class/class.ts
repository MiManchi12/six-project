import { defineStore } from "pinia";
import { reqChose, reqGetVideo, reqGetVideo1, reqGetVideo2, reqGetVideo3, reqGetVideo4, reqGetVideo5 } from "../../api/class/class"
export const useChoseStore = defineStore('class', {
    state: () => {
        return {
            choises: [],
            label11: [],

        }
    },
    actions: {
        async getChose() {
            let result1 = await reqChose();
            console.log(result1)
            this.choises = result1.map(item => item.choises)
            this.label11 = result1.map(item => item.label)
        }
    }
})


export const useVideoStore = defineStore('class', {
    state: () => {
        return {
            content: []
        }
    },
    actions: {
        async getVideo() {
            let result2 = await reqGetVideo();
            console.log(result2)
            this.chotent = result2.content


        }
    }

})
export const useVideoStore1 = defineStore('class', {
    state: () => {
        return {
            content: []
        }
    },
    actions: {
        async getVideo() {
            let result3 = await reqGetVideo1();



        },
    }

})
export const useVideoStore2 = defineStore('class', {
    state: () => {
        return {
            content: []
        }
    },
    actions: {
        async getVideo() {
            let result4 = await reqGetVideo2();



        },
    }

})
export const useVideoStore3 = defineStore('class', {
    state: () => {
        return {
            content: []
        }
    },
    actions: {
        async getVideo() {
            let result5 = await reqGetVideo3();



        },
    }

})
export const useVideoStore4 = defineStore('class', {
    state: () => {
        return {
            content: []
        }
    },
    actions: {
        async getVideo() {
            let result6 = await reqGetVideo4();



        },
    }

})
export const useVideoStore5 = defineStore('class', {
    state: () => {
        return {
            content: []
        }
    },
    actions: {
        async getVideo() {
            let result7 = await reqGetVideo5();



        },
    }

})




