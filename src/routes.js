
import SearchPage from "./components/SearchPage";
import FiltersPage from "./components/FiltersPage";
import MenuPage from "./components/MenuPage";
import FilterTagsPage from "./components/FilterTagsPage";

var routes = [
  {
    path: '/',
    component: SearchPage,
  },
  {
    path: '/menu-page',
    component: MenuPage,
  },
  {
    path: "/filters-page",
    component: FiltersPage,
  },
  {
    path: "/filter-tags-page",
    component: FilterTagsPage,
  },
];

export default routes;
