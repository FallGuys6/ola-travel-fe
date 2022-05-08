import { lazy } from "react";
export default {
    path:'/admin/dashboard/:id',
    exact:true,
    component: lazy(() => import('./index'))
}