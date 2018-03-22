import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from "./routes";

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes),
	],
	declarations: [ ],
	exports: [
		RouterModule
	]
})
export class RoutesModule { }
