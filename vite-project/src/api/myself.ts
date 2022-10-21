import request from '../utils/request'



export const reqMySelfData = ()=>request.get('/userCenter/users/me?access_token=72201c04-790b-4fa9-9230-1352ec16568a')