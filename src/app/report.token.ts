import { InjectionToken } from '@angular/core';
import {Report} from './report/report';

export const APP_REPORTER = new InjectionToken<Report>('app.reporter');