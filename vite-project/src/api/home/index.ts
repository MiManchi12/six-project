import request from '../../utils/request'

export const reqGetRecommendList = ( params)=>request.get('/moment/moments/rec/default',{params})
