export const SliceString = (str, length) => {
  if (str.length > length) {
    return str.slice(0, length) + '...';
  } else if (str.length === 0) {
    return '';
  }
};

export const getUserId = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return user.id;
  }

  return '';
};

export const setLocalStorage = (itemName, data) => {
  if (!itemName || !data) return;
  return localStorage.setItem(itemName, data);
};

export const getLocalStorage = itemName => {
  if (!itemName) return;
  return localStorage.getItem(itemName);
}

export const removeLocalStorage = itemName => {
  if (!itemName) return;
  return localStorage.removeItem(itemName);
};
