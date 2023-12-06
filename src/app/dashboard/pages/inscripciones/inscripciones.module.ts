import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './store/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeature } from './store/inscripciones.reducer';
import { InscripcionesComponent } from './inscripciones.component';
import { InscripcionesTablaComponent } from './componentes/inscripciones-tabla/inscripciones-tabla.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesDialogComponent } from './componentes/inscripciones-dialog/inscripciones-dialog.component';



@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesTablaComponent,
    InscripcionesDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(inscripcionesFeature),
    EffectsModule.forFeature([InscripcionesEffects])
  ]
})
export class InscripcionesModule { }
