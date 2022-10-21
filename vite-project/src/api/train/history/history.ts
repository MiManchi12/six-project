import request from '../../../utils/request'
// 练习室历史记录请求函数
export const reqHistory = () => request.get('/moment/viewRecords?access_token=fc2b72c9-1f4f-4a57-8dc7-640f75c2da73&pageSize=10')

// 练习室我的练习室请求函数
export const reqMyTraining = () => request.get('/trainingCenter/plans/search/findByUserId?access_token=fc2b72c9-1f4f-4a57-8dc7-640f75c2da73&pageSize=20&pageNum=0&type=system')

// 练习室我创建请求函数
export const reqCreate = () => request.get('/trainingCenter/plans/search/findByUserId?myListCategory=my_create&access_token=fc2b72c9-1f4f-4a57-8dc7-640f75c2da73&pageSize=20&pageNum=0&type=system')

// 练习室我加入的请求函数
export const reqJoin = () => request.get('/trainingCenter/plans/search/findByUserId?myListCategory=my_join&access_token=fc2b72c9-1f4f-4a57-8dc7-640f75c2da73&pageSize=20&pageNum=0&type=system')