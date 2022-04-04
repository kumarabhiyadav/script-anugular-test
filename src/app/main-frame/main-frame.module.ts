import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFrameComponent } from './main-frame.component';
import { MainFrameRoutingModule } from './main-frame-routing.module';
import { AlertComponent } from './component/alert/alert.component';
import { AuthFormComponent } from './component/auth-form/auth-form.component';
import { AvatarComponent } from './component/avatar/avatar.component';
import { BadgeComponent } from './component/badge/badge.component';
import { BarChartComponent } from './component/bar-chart/bar-chart.component';
import { BasicTableComponent } from './component/basic-table/basic-table.component';
import { ButtonGroupComponent } from './component/button-group/button-group.component';
import { ButtonComponent } from './component/button/button.component';
import { CardComponent } from './component/card/card.component';
import { DataTableComponent } from './component/data-table/data-table.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { FormChecksComponent } from './component/form-checks/form-checks.component';
import { FormGroupComponent } from './component/form-group/form-group.component';
import { IconComponent } from './component/icon/icon.component';
import { InputGroupComponent } from './component/input-group/input-group.component';
import { PieChartComponent } from './component/pie-chart/pie-chart.component';
import { TagComponent } from './component/tag/tag.component';

@NgModule({
  declarations: [
    MainFrameComponent,

    //  UI Component Library

    AlertComponent,
    AvatarComponent,
    BadgeComponent,
    TagComponent,
    ButtonComponent,
    ButtonGroupComponent,
    FormGroupComponent,
    InputGroupComponent,
    FormChecksComponent,
    AuthFormComponent,
    DropdownComponent,
    IconComponent,
    CardComponent,
    BasicTableComponent,
    DataTableComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [CommonModule, MainFrameRoutingModule],
})
export class MainFrameModule {}
