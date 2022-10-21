// 引入request
import request from "../../../utils/request";
 export const reqGroupType = ()=>request.get('/setup/setups/search/findByGroupType?groupType=skill_level&access_token=72201c04-790b-4fa9-9230-1352ec16568a')