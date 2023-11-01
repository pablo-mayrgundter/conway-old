export class ObjectPool<T> {
    private readonly factory: () => T;
    private readonly destroy: (obj: T) => void;
    private pool: T[] = [];
  
    constructor(factory: () => T, destroy: (obj: T) => void) {
      this.factory = factory;
      this.destroy = destroy;
    }
  
    // Acquire an object from the pool or create a new one if the pool is empty.
    acquire(): T {
      if (this.pool.length > 0) {
        return this.pool.pop() as T;
      }
      return this.factory();
    }
  
    // Release an object back to the pool.
    release(obj: T): void {
      this.pool.push(obj);
    }
  
    // Destroy all objects in the pool.
    clear(): void {
      for (const obj of this.pool) {
        this.destroy(obj);
      }
      this.pool.length = 0;
    }
  }
  