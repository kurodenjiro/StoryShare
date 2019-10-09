import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Story } from '../../interfaces/story.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadDataTimerID: any;
  stories: Story[];
  storiesToRender: Story[];
  requiredIndex: number = 0;
  requiredCount: number = 10;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.loadStories();
    this.loadDataTimerID = setInterval(this.loadStories, 3000);
  }
  
  ngOnDestroy() {
    if(this.loadDataTimerID) {
      clearInterval(this.loadDataTimerID);
    }
  }
  
  loadStories = () => {
    this.dataService.getAllStories().subscribe((stories) => {
      if(this.loadDataTimerID) {
        clearInterval(this.loadDataTimerID)
      }
      this.stories = stories;
      this.getRequiredStories();
    });
  }
  
  getRequiredStories = () => {
    const fromIndex = this.requiredIndex * this.requiredCount;
    const toIndex = fromIndex + this.requiredCount;
    
    this.storiesToRender = this.stories.slice(fromIndex, toIndex);
  }
  
  addStoryToList = (story) => {
    this.storiesToRender.unshift(story);
    this.stories.unshift(story);
  }
  
  hidePost = (index) => {
    this.storiesToRender.splice(index, 1);
  }
  
  updatePagination = (pageEvent) => {
    this.requiredIndex = pageEvent.pageIndex;
    this.requiredCount = pageEvent.pageSize;
    this.getRequiredStories();
  }

}
