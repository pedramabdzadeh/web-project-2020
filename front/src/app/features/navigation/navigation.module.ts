import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SortTypeBarComponent } from './components/sort-type-bar/sort-type-bar.component';
import { SpecsComponent } from './components/specs/specs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TopBarComponent, SideBarComponent, SortTypeBarComponent, SpecsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TopBarComponent, SideBarComponent, SortTypeBarComponent, SpecsComponent
  ]
})
export class NavigationModule { }
