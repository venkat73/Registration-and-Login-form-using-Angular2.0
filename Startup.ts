import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoginModuleLibrary } from './LoginModuleLibrary';
const platform = platformBrowserDynamic();
platform.bootstrapModule(LoginModuleLibrary);