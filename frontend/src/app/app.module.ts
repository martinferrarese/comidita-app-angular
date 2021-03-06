import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemanaComponent } from './semana/semana.component';
import { SelectorComidaComponent } from './selector-comida/selector-comida.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './servicios/in-memory-data.service';
import { AlmuerzoComponent } from './almuerzo/almuerzo.component';
import { CenaComponent } from './cena/cena.component';
import { NuevaComidaComponent } from './nueva-comida/nueva-comida.component';
import { EditorComidasComponent } from './editor-comidas/editor-comidas.component';

@NgModule({
  declarations: [
    AppComponent,
    SemanaComponent,
    SelectorComidaComponent,
    AlmuerzoComponent,
    CenaComponent,
    NuevaComidaComponent,
    EditorComidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
