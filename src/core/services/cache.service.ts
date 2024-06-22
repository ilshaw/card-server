import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Injectable, Inject } from "@nestjs/common";

import { RedisCache } from "cache-manager-redis-yet";

@Injectable()
export class CacheService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: RedisCache) {}

    public async setData(key: string, value: unknown, ttl?: number) {
        return await this.cacheManager.set(key, value, ttl);
    }

    public async getData(key: string) {
        return await this.cacheManager.get(key);
    }
}