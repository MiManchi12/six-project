import request from "@/utils/request";
import access_token from "@/utils/access_token";

// 获取兴趣标签列表数据
export const getHobbyListData = (pageNum: number, pageSize:number) => {
  return request.get(`/avocation/avocations/rec/user?access_token=${access_token}&pageNum=${pageNum}&pageSize=${pageSize}`)
}


// 获取实时输入的搜索数据
export const getSearchData = (keyword: string) => {
  return request.get(`/avocation/avocations/search/findByName?access_token=${access_token}&name=${keyword}`)
}