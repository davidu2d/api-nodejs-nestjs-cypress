import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client, 'mongodb')
    private readonly clientRepository: Repository<Client>
  ) {}

  create(createClientDto: CreateClientDto): Promise<CreateClientDto> {
    let client = new Client()
    client.name = createClientDto.name;
    return this.clientRepository.save(client);
  }

  async findAll(): Promise<CreateClientDto[]> {
    let listClient = await this.clientRepository.find();
    if (listClient.length < 1) {
      throw new HttpException(listClient, HttpStatus.NO_CONTENT);
    }
    return listClient;
  }
}
