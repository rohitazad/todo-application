import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TodoAppComponent } from 'src/app/rohit-azad/todo-app/todo-app.component';
import { TodoAppEditComponent } from 'src/app/rohit-azad/todo-app/todo-app-edit/todo-app-edit.component';
import { CanDeactivateGuard } from 'src/app/rohit-azad/guards/can-deactivate-guard.service';
import { TodoAppViewComponent } from 'src/app/rohit-azad/todo-app/todo-app-view/todo-app-view.component';
import { BreadcrumbComponent } from 'src/app/rohit-azad/breadcrumb/breadcrumb.component';



const appRoutes : Routes  = [
    {
        path:'', 
        component:TodoAppComponent,
        pathMatch: 'full',
    },
    
    
    {
        path:'add-todo', 
        component:TodoAppEditComponent, 
        canDeactivate:[CanDeactivateGuard],
        data: {
            breadcrumb: 'Todo-Add'
        }
    },
    {
        path:'edit-todo/:id/:todoCategory', 
        component:TodoAppEditComponent, 
        canDeactivate:[CanDeactivateGuard],
        data: {
            breadcrumb: 'Todo-Edit'
        }
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch: 'full'
    }
    
]



@NgModule({
    declarations:[
        TodoAppComponent,
        TodoAppEditComponent,
        TodoAppViewComponent,
        BreadcrumbComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports :[
        TodoAppComponent,
        TodoAppEditComponent,
        TodoAppViewComponent,
        BreadcrumbComponent,
        MaterialModule
    ],
    providers:[
        
    ]

})


export class AppRouting {

}

