import { Inject, Injectable, Injector } from '@angular/core';
import { Logger } from './logger';
import { APP_CONFIG, AppConfig } from '../config.token';
import { APP_REPORTER } from '../report.token';
import { Report } from '../report';

@Injectable({
  providedIn: 'root',
})
export class NewLoggerService implements Logger {
  prefix = 'newLogger';

  constructor(@Inject(APP_REPORTER) private reporters: ReadonlyArray<Report>) {}

  log(message: string): void {
    console.log(`_______NEW LOGGER____________`);
    console.log(`${this.prefix} :  ${message}`);

    this.reporters.forEach((reporter) => {
      reporter.report();
    });
    console.log(`_______NEW LOGGER - END____________`);

  }
}
