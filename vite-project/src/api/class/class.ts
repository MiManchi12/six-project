import request from '../../utils/request'

enum API{
<<<<<<< HEAD
    VIP="moment/moments/collect/vip_zone/integrated" 
}
export const reqVip = ()=>request.post(API.VIP,{},{params:{access_token:'c494ae44-3adc-48ca-8749-5128a53358d7',pageSize:20,pageNum:0}})
=======
    CHOSE="/moment/properties/filter/vip_zone/?access_token=c494ae44-3adc-48ca-8749-5128a53358d7",
    VIDEO='/moment/moments/collect/vip_zone/integrated',
    VIDEO1='/moment/moments/collect/vip_zone/sellCountDesc',
    VIDEO2='/moment/moments/collect/vip_zone/viewCountDesc',
    VIDEO3='/moment/moments/collect/vip_zone/priceDesc',
    VIDEO4='/moment/moments/collect/vip_zone/priceAsc',
    VIDEO5='/moment/moments/collect/vip_zone/onsellTimeDesc'
}
export const reqChose = ()=>request.get(API.CHOSE)
export const reqGetVideo = ()=>request.post(API.VIDEO,{},{params:{access_token:'fb15d9d6-533b-4597-bfe7-b8eff6efeb6c',pageSize:20,pageNum:0}})
export const reqGetVideo1 = ()=>request.post(API.VIDEO1,{},{params:{access_token:'fb15d9d6-533b-4597-bfe7-b8eff6efeb6c',pageSize:20,pageNum:0}})
export const reqGetVideo2 = ()=>request.post(API.VIDEO2,{},{params:{access_token:'fb15d9d6-533b-4597-bfe7-b8eff6efeb6c',pageSize:20,pageNum:0}})
export const reqGetVideo3 = ()=>request.post(API.VIDEO3,{},{params:{access_token:'fb15d9d6-533b-4597-bfe7-b8eff6efeb6c',pageSize:20,pageNum:0}})
export const reqGetVideo4 = ()=>request.post(API.VIDEO4,{},{params:{access_token:'fb15d9d6-533b-4597-bfe7-b8eff6efeb6c',pageSize:20,pageNum:0}})
export const reqGetVideo5 = ()=>request.post(API.VIDEO5,{},{params:{access_token:'fb15d9d6-533b-4597-bfe7-b8eff6efeb6c',pageSize:20,pageNum:0}})
>>>>>>> fxs
