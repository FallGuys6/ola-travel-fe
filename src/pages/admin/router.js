import { lazy } from "react";
export default {
    path:'/admin',
    exact:true,
    component: lazy(() => import('./index'))
}