import request from '../../utils/request'
// 推荐
export const reqGetRecommendList = (params) => request.get('/moment/moments/rec/default', { params })
// 作品
export const reqGetOriginalList = (params) => request.post('/moment/moments/collect/original/integrated', {}, { params })
// 教程
export const reqGetCourseList = (params) => request.post('/moment/moments/collect/course/integrated', {}, { params })
// 专题
export const reqGetSpecialTopicList = (params) => request.post('/moment/moments/collect/course/lastest', {}, { params })
// 动态
export const reqGetInformationList = (params) => request.get('/moment/moments/frontDynamic/default', { params })

// 
export const reqGetInterest =()=>request.get('/avocation/avocations/rec/user?access_token=c494ae44-3adc-48ca-8749-5128a53358d7&pageNum=0&pageSize=20')
