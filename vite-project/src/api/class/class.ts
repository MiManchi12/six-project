import request from '../../utils/request'

enum API{
    VIP="/moment/properties/filter/vip_zone" 
}
export const reqVip = ()=>request.get(API.VIP)