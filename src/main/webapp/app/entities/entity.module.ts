import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppLocationModule } from './location/location.module';
import { AppCoordinatesModule } from './coordinates/coordinates.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AppLocationModule,
        AppCoordinatesModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppEntityModule {}
