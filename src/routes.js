
import SearchPage from "./components/SearchPage";
import FiltersPage from "./components/FiltersPage";

var routes = [
  {
    path: '/',
    component: SearchPage,
  },
  {
    path: "/filters-page",
    component: FiltersPage,
  },
];

export default routes;
