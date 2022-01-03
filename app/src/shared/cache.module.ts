import { Module } from "@nestjs/common";
import { CacheController } from "./cache.controller";
import { CacheCustomService } from "./cache.service";

@Module({
    providers: [CacheCustomService],
    controllers: [CacheController]
})
export class CacheCustomModule {}