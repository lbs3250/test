export const navigations = [
  {
    name: "테스트",
    //icon: "assignment",
    children: [

      { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
    ]
  },


  {
    name: "계정정보",
    children: [
      { name: "공지", path: "/user-menu/notification", icon: "notifications" },
      { name: "기업 / 점포 일람", path: "/user-menu/store-info", icon: "home" },
      { name: "계정 정보", path: "/user-menu/user-info", icon: "person" },
      { name: "메일 수신 설정", path: "/user-menu/mail-setting", icon: "mail" },
    ]
  },
  {
    name: "매장정보",
    children: [
      { name: "점포 일람", icon: "villa", path: "/store-info-menu/store-list" },
      { name: "기업정보", icon: "business", path: "/store-info-menu/company-info" },
      { name: "이용 명세서", icon: "attach_money", path: "/store-info-menu/bill" },
      { name: "노동자 명부", icon: "summarize", path: "/store-info-menu/worker-list" }
    ]
  },
  {
    name: "매장관리",
    children: [
      { name: "홈", icon: "home", path: "/store-manage-menu/management-home" },
      { name: "작업자 관리", icon: "people", path: "/store-manage-menu/worker-management" },
      { name: "구인의 편지지", icon: "mail", path: "/store-manage-menu/recruit-notice" },
      { name: "구인 일람", icon: "eventnote", path: "/store-manage-menu/worker-calendar" },
      { name: "메세지", icon: "message", path: "/store-manage-menu/message" },
    ]
  }

  ,

  { label: "Session/Auth", type: "label" },
  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" }
    ]
  },
  { label: "Components", type: "label" },
  {
    name: "Components",
    icon: "favorite",
    badge: { value: "30+", color: "secondary" },
    children: [
      { name: "Auto Complete", path: "/material/autocomplete", iconText: "A" },
      { name: "Buttons", path: "/material/buttons", iconText: "B" },
      { name: "Checkbox", path: "/material/checkbox", iconText: "C" },
      { name: "Dialog", path: "/material/dialog", iconText: "D" },
      { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E" },
      { name: "Form", path: "/material/form", iconText: "F" },
      { name: "Icons", path: "/material/icons", iconText: "I" },
      { name: "Menu", path: "/material/menu", iconText: "M" },
      { name: "Progress", path: "/material/progress", iconText: "P" },
      { name: "Radio", path: "/material/radio", iconText: "R" },
      { name: "Switch", path: "/material/switch", iconText: "S" },
      { name: "Slider", path: "/material/slider", iconText: "S" },
      { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
      { name: "Table", path: "/material/table", iconText: "T" }
    ]
  },
  {
    name: "Charts",
    icon: "trending_up",
    children: [{ name: "Echarts", path: "/charts/echarts", iconText: "E" }]
  },
  {
    name: "Documentation",
    icon: "launch",
    type: "extLink",
    path: "http://demos.ui-lib.com/matx-react-doc/"
  }
];
