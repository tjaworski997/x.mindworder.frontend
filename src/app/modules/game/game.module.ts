import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { InputWordComponent } from './components/input-word/input-word.component';
import { GameBatchInfoComponent } from './components/game-batch-info/game-batch-info.component';
import { UserManualComponent } from './components/user-manual/user-manual.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    InputWordComponent,
    GameBatchInfoComponent,
    UserManualComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [MainComponent],
})
export class GameModule {}
