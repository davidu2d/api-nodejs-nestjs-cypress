import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class CorrelationIdInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request: Request = ctx.getRequest();
    console.log(request.headers);
    this.setHeaders(request);
    

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }

  private setHeaders(request): void {
    let correlationId = uuidv4();
    this.updateHeaders(request, 'X-Correlation-Id', correlationId);
  }

  private updateHeaders(request: Request, property: string, value: string): void {
    if (!request.headers.hasOwnProperty(property)) {
      request.headers[property] = value;
    } else {
      void 0;
    }
  }
}
