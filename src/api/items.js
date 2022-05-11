import { fetchData } from "./utils";

export const fetchItems = (success, fail) => {
  fetchData({
    url: 'https://gist.githubusercontent.com/mskalandunas/1bf9b09b43caddec4c2d462514ee3dad/raw/9c0093220fda33887c329648bcf1e242693666e8/todo_list_items.json',
    success,
    fail
  });
};