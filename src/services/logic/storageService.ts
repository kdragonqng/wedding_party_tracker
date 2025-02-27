import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {
  public async save<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error('Error saving value:', e);
    }
  }

  public async load<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) as T : null;
    } catch (e) {
      console.error('Error loading value:', e);
      return null;
    }
  }

  public async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing value:', e);
    }
  }

  public async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('Error clearing storage:', e);
    }
  }
}

const storageService = new StorageService();
export default storageService;
