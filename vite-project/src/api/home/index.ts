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

