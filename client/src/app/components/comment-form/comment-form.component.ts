import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  name: string;
  text: string;
  @Input() storyID: string;
  @Output() updateCommentList: EventEmitter<any> = new EventEmitter();
  
  constructor(private dataService:DataService) { }

  ngOnInit() { }
  
  validateForm = (data) => {
    if (!data.name || !data.text) {
      alert('All fields are required');
      return false;
    }
    return true;
  }
  
  sendComment = () => {
    const data = {
      id: this.storyID,
      comment: {
        name: this.name,
        text: this.text,
      }
    };
    const isFormValid = this.validateForm(data.comment);
    
    if (isFormValid) {
      this.dataService.postComment(data).subscribe((story) => {
        this.updateCommentList.emit(story);
        this.name = '';
        this.text = '';
      });
    }
  }

}
