import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolsListComponent } from "./tools-list/tools-list.component";
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ToolsListComponent]
})
export class AppComponent{
  title = 'ToolShelf';

}
