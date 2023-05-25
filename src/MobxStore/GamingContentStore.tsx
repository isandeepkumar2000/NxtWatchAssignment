import Cookies from "js-cookie";
import { jwtToken } from "../Constants/appConstants";
import { action, makeAutoObservable, observable } from "mobx";

import ApiStatusConstant from "../ConstantsApiStatus/ApiConstantStatus";
import { GamingContentType } from "../ComponentsTypes";

export class GamingContentStore {
  gaming: GamingContentType[] = [];
  @observable apiStatus = ApiStatusConstant.loading;
  constructor() {
    makeAutoObservable(this);
  }
  @action
  setApiStatus(value: string) {
    this.apiStatus = value;
  }
  setGaming(data: GamingContentType[] = []) {
    this.gaming = data;
  }

  async fetchGamingList() {
    try {
      const Token = Cookies.get(jwtToken);
      const response = await fetch(`https://apis.ccbp.in/videos/gaming`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.videos.map(
          (video: GamingContentType) => ({
            title: video.title,
            id: video.id,
            thumbnailUrl: video.thumbnail_url,
            viewCount: video.view_count,
          })
        );
        this.setGaming(updatedData);
        this.setApiStatus(ApiStatusConstant.success);
      } else {
        this.setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
      this.setApiStatus(ApiStatusConstant.failed);
    }
  }
}
