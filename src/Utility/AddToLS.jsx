import { toast } from "react-toastify";

const getStoreApp = () => {
  const getApp = localStorage.getItem("appList");
  return getApp ? JSON.parse(getApp) : [];
};

const addToStore = (id) => {
  const setStoreData = getStoreApp();
  if (setStoreData.includes(id)) {
    toast("Already Added!");
    return true;
  } else {
    setStoreData.push(id);
    localStorage.setItem("appList", JSON.stringify(setStoreData));
    return false;
  }
};

const removeApp = (id) => {
  const getApp = getStoreApp();
  const updateApp = getApp.filter((app) => app !== id);
  localStorage.setItem("appList", JSON.stringify(updateApp));
  return updateApp;
};

export { addToStore, getStoreApp, removeApp };
