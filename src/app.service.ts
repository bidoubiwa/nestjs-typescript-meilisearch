import { Injectable } from '@nestjs/common';
import MeiliSearch from 'meilisearch-2'

console.log({ MeiliSearch });
const client = new MeiliSearch({
  host: '123'
})
@Injectable()
export class AppService {
  getHello(): string {
    
    return 'Hello World!';
  }
}
