import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgCheckComponent } from './components/svgs/svg-check/svg-check.component';
import { SvgXComponent } from './components/svgs/svg-x/svg-x.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyComponent } from './components/keyboard/key/key.component';

@NgModule({
  declarations: [
    SvgCheckComponent,
    SvgXComponent,
    KeyboardComponent,
    KeyComponent,
  ],
  exports: [SvgCheckComponent, SvgXComponent, KeyboardComponent],
  imports: [CommonModule],
})
export class SharedModule {}
