import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Home from "@/pages/Home.vue";
import Farm from "@/pages/Farm.vue";
import Schedule from "@/pages/Schedule.vue";
import Camera from "@/pages/Camera.vue";
import Account from "@/pages/Account.vue";
//import Account from "@/pages/Samples/Icons.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "farm",
        name: "Farm",
        component: Farm
      },
      {
        path: "schedule",
        name: "Schedule",
        component: Schedule
      },
      {
        path: "camera",
        name: "Camera",
        component: Camera
      },
      {
        path: "account",
        name: "Account",
        component: Account
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
