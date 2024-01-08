import { Component } from '@angular/core';
import { ToolListCardComponent } from "./tool-list-card/tool-list-card.component";
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { ToolList } from '../shared/interface/tool-list';
@Component({
    selector: 'app-tools-list',
    standalone: true,
    templateUrl: './tools-list.component.html',
    styleUrl: './tools-list.component.css',
    imports: [ToolListCardComponent,CommonModule]
})
export class ToolsListComponent {
  posts: ToolList[] | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
