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
    alert("already added");
  } else {
    setStoreData.push(id);
    localStorage.setItem("appList", JSON.stringify(setStoreData));
  }
};

export { addToStore };
