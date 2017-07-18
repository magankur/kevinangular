import {Routes, RouterModule} from "@angular/router";
import {ShowdataComponent} from './showdata/showdata.component';

const APP_ROUTES : Routes=[
{path:'', component:ShowdataComponent} 
];

export const routing=RouterModule.forRoot(APP_ROUTES);
