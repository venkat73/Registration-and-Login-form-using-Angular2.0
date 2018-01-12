import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RegisterModuleLibrary } from './RegisterModuleLibrary';
const platform = platformBrowserDynamic();
platform.bootstrapModule(RegisterModuleLibrary);