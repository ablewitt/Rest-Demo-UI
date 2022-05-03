import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { RestServiceService, UploadMsg } from '../rest-service.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  uploadMsg? : UploadMsg


  uploadForm = this.formBuilder.group({
    fileField: ['', Validators.required],
    commentField: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private restService: RestServiceService) { }

  ngOnInit(): void {
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.patchValue({
        fileField: file
      });
    }
  }

  submit(){
    this.restService.submit(
      this.uploadForm.value["fileField"],
      this.uploadForm.value["commentField"]
      ).subscribe((response) => this.uploadMsg = response)
  }


}
