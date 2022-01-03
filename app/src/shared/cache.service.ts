import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import {Cache} from 'cache-manager';

@Injectable()
export class CacheCustomService{

    constructor(
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache
    ){}

    async set(key: string, value: string) {
        const response = await this.cacheManager.set(key, value);
        return response;
    }

    async get(key: string) {
        const response = await this.cacheManager.get(key);
        return response;
    }

    async del(key: string) {
        await this.cacheManager.del(key);
    }

}