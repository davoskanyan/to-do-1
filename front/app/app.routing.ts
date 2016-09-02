import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes:Routes = [
	{path: 'toDo', loadChildren: 'app/toDo/toDo.module#ToDoComponent'},
	{path: '', redirectTo: '/index', pathMatch: 'full'},
	{path: '**', loadChildren: 'app/common/pageNotFound.module#PageNotFoundComponent'},
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);