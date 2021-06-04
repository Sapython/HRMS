import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataProvider } from '../providers/data.provider';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  password: FormControl = new FormControl("", [Validators.required, Validators.minLength(10)])
  photo: FormControl = new FormControl("", [Validators.required])
  confirmPassword:FormControl = new FormControl("", [Validators.required])
  v_status: boolean = false;

  isLoading: boolean = false; // disable the submit button if loading
  img1:any;
  file:any;
  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);  // to trigger onload
    }
    let fileList: FileList = event.target.files;  
    this.file = fileList[0];
    console.log(this.file);
  }
  constructor(public authService:AuthService,private formbuilder: FormBuilder,public dataProvider:DataProvider) {
    this.form = this.formbuilder.group({
      name: this.name,
      email: this.email,
      password:this.password,
      photo:this.photo,
      confirmPassword:this.confirmPassword,
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
  onSubmit() {
    if (this.form.status == "VALID") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.form.get("name")!.value);
      formData.append("email", this.form.get("email")!.value);
      formData.append("password", this.form.get("password")!.value);
      formData.append("photo", this.form.get("photo")!.value);
      this.isLoading = true; // sending the post request async so it's in progress
      console.log(formData);
      this.authService.SignUp(
        this.form.get("email").value,
        this.form.get("password").value,
        this.form.get("name").value,
        this.file,
      )
      this.isLoading = false;
      this.form.enable()
    }
  }
  ngOnInit() {}

}
