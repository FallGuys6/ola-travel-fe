import { lazy } from "react";
export default {
    path:'*',
    exact:false,
    component: lazy(() => import('./index'))
}