import request from '../../utils/request'

enum API{
    VIP="moment/moments/collect/vip_zone/integrated" 
}
export const reqVip = ()=>request.post(API.VIP,{},{params:{access_token:'c494ae44-3adc-48ca-8749-5128a53358d7',pageSize:20,pageNum:0}})