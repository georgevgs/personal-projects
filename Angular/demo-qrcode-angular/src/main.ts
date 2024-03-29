import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { applyPolyfills, defineCustomElements } from '@deckdeckgo/qrcode/dist/loader';

if (environment.production) {
  enableProdMode();
}

applyPolyfills().then(() => {
  defineCustomElements(window);
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
