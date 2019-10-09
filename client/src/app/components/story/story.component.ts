import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Story } from '../../interfaces/story.interface';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story: Story;
  storyID: string;
  
  constructor(private dataService:DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.storyID = params['id'];
      this.dataService.getStory({id: this.storyID}).subscribe((story) => {
        this.story = story;
      }, (error) => {
        this.router.navigate(['/404']);
      });
    });
  }
  
  updateCommentList = (story) => {
    this.story = story;
  }

}
