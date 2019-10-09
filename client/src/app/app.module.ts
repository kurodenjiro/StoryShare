import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//material-ui
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCardModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,
         MatProgressSpinnerModule,
         MatFormFieldModule,
         MatInputModule,
         MatPaginatorModule,
         MatListModule } from '@angular/material';
import 'hammerjs';

//components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StoryComponent } from './components/story/story.component';
import { CommentsComponent } from './components/comments/comments.component';
import { StoryEditorComponent } from './components/story-editor/story-editor.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

//services
import { DataService } from './services/data.service';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'story/:id', component: StoryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavigationComponent,
    StoryComponent,
    CommentsComponent,
    StoryEditorComponent,
    PaginatorComponent,
    SpinnerComponent,
    CommentFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
