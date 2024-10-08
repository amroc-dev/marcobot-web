import HomePage from "@components/HomePage";
import SearchPage from "@components/SearchPage";
import FiltersPage from "@components/FiltersPage";
import MenuPage from "@components/MenuPage";
import FilterTagsPage from "@components/FilterTagsPage";
import SettingsPage from "@components/SettingsPage";
import MaintenancePage from "@components/MaintenancePage";

var routes = [
  {
    path: "/",
    component: SearchPage,
  },
  {
    path: "/search-page",
    component: SearchPage,
  },

  {
    path: "/menu-page",
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
  {
    path: "/settings-page",
    component: SettingsPage,
  },
];

export default routes;
