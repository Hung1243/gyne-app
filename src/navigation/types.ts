export type RootStackParamList = {
  MainTabs: undefined;
  // Thêm các screen khác nếu cần
};

export type MainTabParamList = {
  Home: undefined;
  Calendar: undefined;
  Partner: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Main: undefined;
  BlogList: undefined;
  Blog: { id: string };
};
