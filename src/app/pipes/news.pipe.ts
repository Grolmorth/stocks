import { StocksService } from './../services/stocks.service';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'news',
  pure: false
})
export class NewsPipe implements PipeTransform {
  cachedSource: string = '';
  news: string = 'loading...';

  constructor(private service: StocksService) { }

  transform(source: string, args?: any): any {
    if (source !== this.cachedSource) {

      this.cachedSource = source;
      this.service.getNewsSnapshot(source).subscribe(news => {
        this.news = `<a href="${news.url}" terget="_blank">${news.title}</a>`;

      });

    }
    return this.news;
  }


}
