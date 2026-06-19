const COMMENTS_KEY = "gosquad:rolepage:comments";

export async function getComments<T>(): Promise<T | null> {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COMMENTS_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export async function setComments<T>(value: T): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(value));
  } catch {
    // storage full or unavailable
  }
}

export function isStorageAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const testKey = "__gosquad_storage_test__";
    localStorage.setItem(testKey, "1");
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}
