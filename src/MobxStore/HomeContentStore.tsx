import ApiStatusConstant from "../ConstantsApiStatus/ApiConstantStatus";
import { action, makeAutoObservable, observable } from "mobx";

import { jwtToken } from "../Constants/appConstants";
import Cookies from "js-cookie";
import { VideoTypeList } from "../ComponentsTypes";

export class HomeContentStore {
  home: VideoTypeList[] = [];
  searchValue: string = "";
  apiStatus = ApiStatusConstant.loading;
  constructor() {
    makeAutoObservable(this);
  }
  @observable
  setApiStatus(value: string) {
    this.apiStatus = value;
  }
  setHomeList(data: VideoTypeList[] = []) {
    this.home = data;
  }
  @action
  setSearchValue(value: string) {
    this.searchValue = value;
  }

  async fetchHomeList(searchValue: string) {
    try {
      const Token = Cookies.get(jwtToken);
      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchValue}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log(response, "hyyy i am HomeStoreMobx Response");
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.videos.map((video: VideoTypeList) => ({
          title: video.title,
          id: video.id,
          thumbnailUrl: video.thumbnail_url,
          channel: video.channel,
          viewCount: video.view_count,
          publishedAt: video.published_at,
        }));
        this.setHomeList(updatedData);
        this.setApiStatus(ApiStatusConstant.success);
      } else {
        this.setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
      this.setApiStatus(ApiStatusConstant.failed);
    }
  }
}
