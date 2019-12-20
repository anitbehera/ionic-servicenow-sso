import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallbackPageRoutingModule } from './callback-routing.module';

import { CallbackPage } from './callback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallbackPageRoutingModule
  ],
  declarations: [CallbackPage]
})
export class CallbackPageModule {}
