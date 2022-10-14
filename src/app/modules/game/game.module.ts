import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from 'src/app/modules/game/pages/game/game.component';

import { GameBatchInfoComponent } from './components/game-batch-info/game-batch-info.component';
import { UserManualComponent } from './components/user-manual/user-manual.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ApplicationComponent } from './pages/application/application.component';
import { StarterComponent } from './pages/starter/starter.component';

@NgModule({
  declarations: [
    GameComponent,
    GameBatchInfoComponent,
    UserManualComponent,
    ApplicationComponent,
    StarterComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [GameComponent, ApplicationComponent],
})
export class GameModule {}
