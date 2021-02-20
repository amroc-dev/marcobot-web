
import SearchPage from "./components/SearchPage";
import FiltersPage from "./components/FiltersPage";
import TagsPage from "./components/TagsPage";

var routes = [
  {
    path: '/',
    component: SearchPage,
  },
  {
    path: "/filters-page",
    component: FiltersPage,
  },
  {
    path: "/tags-page",
    component: TagsPage,
  },
];

export default routes;
