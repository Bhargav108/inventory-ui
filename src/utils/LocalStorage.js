const _window = window;

export default {
  get(key, serialize = true) {
    try {
      const content = _window.localStorage.getItem(key);
      if (serialize) return JSON.parse(content);
      return content;
    } catch (err) {
      return null;
    }
  },
  set(key, data, deserialize = true) {
    if (deserialize)
      return _window.localStorage.setItem(key, JSON.stringify(data));
    return _window.localStorage.setItem(key, data);
  },
  remove(key) {
    return !!_window.localStorage.removeItem(key);
  },
  clear() {
    return !!_window.localStorage.clear();
  }
};
