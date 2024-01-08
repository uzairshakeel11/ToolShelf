import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolList } from '../../shared/interface/tool-list';

@Component({
  selector: 'app-tool-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tool-list-card.component.html',
  styleUrl: './tool-list-card.component.css'
})
export class ToolListCardComponent {
  @Input() data:ToolList;
  isBlack:boolean=true;
  ngOnInit() { 
    if(this.data?.toolAvailable<5){
      this.isBlack=false;
    }
  }
  getShortDescription(description: string, maxLength: number): string {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  }
  
  
}
