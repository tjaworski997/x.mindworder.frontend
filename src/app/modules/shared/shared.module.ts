import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgCheckComponent } from './components/svgs/svg-check/svg-check.component';
import { SvgXComponent } from './components/svgs/svg-x/svg-x.component';

@NgModule({
  declarations: [SvgCheckComponent, SvgXComponent],
  exports: [SvgCheckComponent, SvgXComponent],
  imports: [CommonModule],
})
export class SharedModule {}
