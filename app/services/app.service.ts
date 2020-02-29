import { getRepository, Repository } from 'typeorm'
import { Service } from 'typedi'
import { App } from '../entities';

@Service()
export class AppService {
    repository: Repository<App>

    constructor() {
        this.repository = getRepository(App)
    }
}