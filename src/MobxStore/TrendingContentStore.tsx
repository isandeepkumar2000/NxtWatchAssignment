import Cookies from "js-cookie";

import { jwtToken } from "../Constants/appConstants";
import ApiStatusConstant from "../ConstantsApiStatus/ApiConstantStatus";
import { action, makeAutoObservable, observable } from "mobx";
import { TendingContentType } from "../ComponentsTypes";

export class TrendingContentStore {
  trending: TendingContentType[] = [];
  @observable apiStatus = ApiStatusConstant.loading;
  constructor() {
    makeAutoObservable(this);
  }
  @action
  setApiStatus(value: string) {
   
    this.apiStatus = value;
  }
  setTrending(data: TendingContentType[] = []) {
    this.trending = data;
  }

  async fetchTrendingList() {
    try {
      const Token = Cookies.get(jwtToken);
      const response = await fetch(`https://apis.ccbp.in/videos/trending`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.videos.map(
          (video: TendingContentType) => ({
            title: video.title,
            id: video.id,
            thumbnailUrl: video.thumbnail_url,
            channel: video.channel,
            viewCount: video.view_count,
            publishedAt: video.published_at,
          })
        );
        this.setTrending(updatedData);
        this.setApiStatus(ApiStatusConstant.success);
      } else {
   
        this.setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
 
      this.setApiStatus(ApiStatusConstant.failed);
    }
  }
}
