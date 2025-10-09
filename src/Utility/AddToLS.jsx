import { toast } from "react-toastify";

const getStoreApp = () => {
  const getApp = localStorage.getItem("appList");
  if (getApp) {
    return JSON.parse(getApp);
  } else {
    return [];
  }
};

const addToStore = (id) => {
  const setStoreData = getStoreApp();
  if (setStoreData.includes(id)) {
    toast("Already Added!");
  } else {
    setStoreData.push(id);
    localStorage.setItem("appList", JSON.stringify(setStoreData));
  }
};

export { addToStore, getStoreApp };
