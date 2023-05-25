export type NxtwatchContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  showBanner: boolean;
  closeBanner: () => void;
  savedVideo: VideoDetailType[];
  setSavedVideo: React.Dispatch<React.SetStateAction<VideoDetailType[]>>;
};

export type VideoDetailType = {
  title: string;
  id: string;
  thumbnailUrl: string;
  videoUrl: string;

  viewCount: string;
  publishedAt: string;
  description: string;
  channel: {
    name: string;
    profile_image_url: string;
    subscriber_count: string;
  };
};

export type VideoIdType = {
  id: string;
};

export type VideoDetailsStyle = {
  darkMode: boolean;
};
export type VideoDetailsStyleActive = {
  isActive: boolean;
};

export type VideoTypeList = {
  channel: {
    name: string;
    profile_image_url: string;
  };
  title: string;
  id: string;
  thumbnailUrl: string;

  viewCount: string;
  publishedAt: string;
  thumbnail_url: string;
  view_count: string;
  published_at: string;
};
export type GettingPP = {
  searchValue: string;
};

export type TendingContentType = {
  id: string;
  title: string;
  thumbnail_url: string;
  channel: {
    name: string;
    profile_image_url: string;
  };
  view_count: string;
  published_at: string;
  viewCount: string;
  thumbnailUrl: string;
  publishedAt: string;
};

export type TrendingContentStyle = {
  darkMode: boolean;
};

export type HomeContentStyleComponentsType = {
  darkMode: boolean;
};

export type GamingContentType = {
  id: string;
  title: string;
  thumbnail_url: string;
  view_count: string;
  thumbnailUrl: string;
  viewCount: string;
};

export type GamingContentStyle = {
  darkMode: boolean;
};

export type LoginPages = {
  darkMode: boolean;
};

export type HomeVideoItemStyleComp = {
  darkMode: boolean;
};

export type HomeVideoPrp = {
  data: VideoTypeList;
};

export type LogoutStyle = {
  darkMode: boolean;
};
export type LogoutButtonType = {
  onClose: () => void;
  onConfirm: () => void;
};

export type SideBarType = {
  darkMode: boolean;
};

export type SearchBarStyle = {
  darkMode: boolean;
};

export type SearchBarProp = {
  searchValue: string;
  onChangeSearch: any;
  clearInput: any;
};

export type SavedVideoPp = {
  data: VideoDetailType;
};

export type SavedVideoStyle = {
  darkMode: boolean;
};

export type NavBarStyle = {
  darkMode: boolean;
};
