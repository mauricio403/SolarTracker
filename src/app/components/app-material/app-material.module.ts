import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 

@NgModule({
  
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    NgbCarouselModule,
    MatDialogModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
   
  ],
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    NgbCarouselModule,
    MatDialogModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
    
           ]
})
export class AppMaterialModule {
 
}
