import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsefordirectiveComponent } from './usefordirective/usefordirective.component';
import { UseswitchdirectiveComponent } from './useswitchdirective/useswitchdirective.component';
import { FormsModule } from '@angular/forms';
import { UsengifdirectiveComponent } from './usengifdirective/usengifdirective.component';
import { UsengclasscComponent } from './usengclassc/usengclassc.component';
import { UsengstyleComponent } from './usengstyle/usengstyle.component';
import { ParentCompoComponent } from './inputparentchild/parent-compo/parent-compo.component';
import { ChildCompoComponent } from './inputparentchild/child-compo/child-compo.component';
import { UsecustomdirectiveComponent } from './customdirective/usecustomdirective/usecustomdirective.component';
import { MydirectiveDirective } from './customdirective/mydirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsefordirectiveComponent,
    UseswitchdirectiveComponent,
    UsengifdirectiveComponent,
    UsengclasscComponent,
    UsengstyleComponent,
    ParentCompoComponent,
    ChildCompoComponent,
    UsecustomdirectiveComponent,
    MydirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
