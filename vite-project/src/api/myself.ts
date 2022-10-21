import request from '../utils/request'



export const reqMySelfData = ()=>request.get('/userCenter/users/me?access_token=fc2b72c9-1f4f-4a57-8dc7-640f75c2da73')