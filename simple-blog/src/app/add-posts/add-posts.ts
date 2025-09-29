import { Component, inject, output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup} from '@angular/forms'; 

@Component({
  selector: 'blog-add-posts',
  imports: [ReactiveFormsModule],
  templateUrl: './add-posts.html',
  styleUrl: './add-posts.css'
})

export class AddPosts {
// obtendo instância
  private fb = inject(FormBuilder);

  newPost = output<{title: string, img: string, content: string}>();

  postForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    img: ['', Validators.required],
    content: ['', Validators.required]
  });

  submitPost(event?: Event) {
    event?.preventDefault();
    if (this.postForm.valid) {
      const formValue = this.postForm.getRawValue();
      console.log('Post enviado!')
      // enviando dados pro app
      this.newPost.emit(formValue);

      this.postForm.reset({title: '', img: '', content: ''})
    } else {
      // método pra um erro aparecer
      this.postForm.markAllAsTouched();
    }
  }
}
