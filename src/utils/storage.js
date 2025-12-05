export const loadState = (key, fallback) => {
  try {
    const s = localStorage.getItem(key)
    return s ? JSON.parse(s) : fallback
  } catch {
    return fallback
  }
}

export const saveState = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state))
  } catch {}
}
