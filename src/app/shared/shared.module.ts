import { NgModule } from '@angular/core';
import { CustomTimePipe } from '../_helpers/custom-time.pipe';

@NgModule({
  declarations: [
    /* declare it once, here */
    CustomTimePipe
  ],
  exports: [
    /* then export it */
    CustomTimePipe
  ]
})
export class SharedModule { }
