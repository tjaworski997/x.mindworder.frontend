import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './modules/game/game.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalService } from 'src/app/modules/shared/services/modal/modal.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GameModule, HttpClientModule],
  providers: [ModalService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
