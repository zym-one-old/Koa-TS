import { JsonController } from 'routing-controllers'
import { AppService } from '../services';

@JsonController()
export class AppController {

  constructor(
    private appService: AppService,
  ) {
  }
}