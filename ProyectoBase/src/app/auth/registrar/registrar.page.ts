import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
    {
      nombre:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
    },{
      validators:this.MustMatch('password','confirmPassword')
    }
    );
  }

  registrar(form){
    let inputs= form.form.value;
    if(inputs.password != inputs.confirmPassword){
      console.log('El password y la confirmcion')
    }
  }

  MustMatch(controlName:string, matchingControlName:string){
    return true;
  }

}
