import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CacheCustomService } from "./cache.service";
import { CreateCacheDTO } from "./dto/create-cache.dto";

@Controller('redis')
export class CacheController{

    constructor(private readonly cacheService: CacheCustomService){}

    @Post()
    create(@Body() createCacheDTO: CreateCacheDTO) {
        return this.cacheService.set(createCacheDTO.key, createCacheDTO.value);
    }

    @Get(':key')
    find(@Param('key') key: string) {
        return this.cacheService.get(key);
    }


}