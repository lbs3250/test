import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";

import materialRoutes from "app/views/material-kit/MaterialRoutes";

// SESSION PAGES
const NotFound = Loadable(lazy(() => import("app/views/sessions/NotFound")));
const JwtLogin = Loadable(lazy(() => import("app/views/sessions/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("app/views/sessions/JwtRegister")));
const ForgotPassword = Loadable(lazy(() => import("app/views/sessions/ForgotPassword")));
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));

const Notification = Loadable(lazy(() => import("app/views/userMenu/Notification")));
const MailSetting = Loadable(lazy(() => import("app/views/userMenu/MailSetting")));
const StoreInfo = Loadable(lazy(() => import("app/views/userMenu/StoreInfo")));
const UserInfo = Loadable(lazy(() => import("app/views/userMenu/UserInfo")));

const Bill = Loadable(lazy(() => import("app/views/storeInfoMenu/Bill")));
const CompanyInfo = Loadable(lazy(() => import("app/views/storeInfoMenu/CompanyInfo")));
const StoreList = Loadable(lazy(() => import("app/views/storeInfoMenu/StoreList")));
const WorkerList = Loadable(lazy(() => import("app/views/storeInfoMenu/WorkerList")));

const ManageHome = Loadable(lazy(() => import("app/views/storeManageMenu/Home")));
const Message = Loadable(lazy(() => import("app/views/storeManageMenu/Message")));
const RecruitNotice = Loadable(lazy(() => import("app/views/storeManageMenu/RecruitNotice")));
const WorkerCalendar = Loadable(lazy(() => import("app/views/storeManageMenu/WorkCalendar")));
const WorkerManagement = Loadable(lazy(() => import("app/views/storeManageMenu/WorkerManagement")));


const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      { path: "/dashboard/default", element: <Analytics />, auth: authRoles.admin },
      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor },

      { path: "/user-menu/notification", element: <Notification /> },
      { path: "/user-menu/mail-setting", element: <MailSetting /> },
      { path: "/user-menu/store-info", element: <StoreInfo /> },
      { path: "/user-menu/user-info", element: <UserInfo /> },

      { path: "/store-info-menu/bill", element: <Bill /> },
      { path: "/store-info-menu/company-info", element: <CompanyInfo /> },
      { path: "/store-info-menu/store-list", element: <StoreList /> },
      { path: "/store-info-menu/worker-list", element: <WorkerList /> },

      { path: "/store-manage-menu/management-home", element: <ManageHome /> },
      { path: "/store-manage-menu/message", element: <Message /> },
      { path: "/store-manage-menu/recruit-notice", element: <RecruitNotice /> },
      { path: "/store-manage-menu/worker-calendar", element: <WorkerCalendar /> },
      { path: "/store-manage-menu/worker-management", element: <WorkerManagement /> },


      // session pages
      { path: "/session/not-found", element: <NotFound /> },
      { path: "/session/jwt-login", element: <JwtLogin /> },
      { path: "/session/jwt-register", element: <JwtRegister /> },
      { path: "/session/forgot-password", element: <ForgotPassword /> },
      { path: "/", element: <Navigate to="dashboard/default" /> },
      { path: "*", element: <NotFound /> }
    ]
  },
];
export default routes;
