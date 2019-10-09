import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-story-editor',
  templateUrl: './story-editor.component.html',
  styleUrls: ['./story-editor.component.css']
})
export class StoryEditorComponent implements OnInit {
  isFormOpen: boolean = false;
  author: string;
  story: string;
  image: string;
  @Output() addStoryToList: EventEmitter<any> = new EventEmitter();
  
  constructor(private dataService:DataService) { }

  ngOnInit() { }
  
  toggleForm = () => {
    this.isFormOpen = !this.isFormOpen;
  }
  
  validateStory = (data) => {
    const re = /\.(jpe?g|png|gif|bmp)$/i;
    if (!re.test(data.image)) {
      alert('wrong image extension');
      return false;
    }
    if (data.author.length > 12) {
      alert('your name length can can not be more than 12');
      return false;
    }
    if (!data.author || !data.story) {
      alert('all fields are required');
      return false;
    }
    return true;
  }
  
  submitStory = () => {
    const data = {
      author: this.author,
      story: this.story,
      image: this.image
    };
    const isValidData = this.validateStory(data);
    
    if (isValidData) {
      this.dataService.postStory(data).subscribe((story) => {
        this.addStoryToList.emit(story);
      });

      this.author = '';
      this.story = '';
      this.image = '';
    }
  }

}
