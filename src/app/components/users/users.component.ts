import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  //showExtended: boolean;
  loaded: number;
  enableAdd: boolean;
  showForm: boolean = false;
  //@ViewChild('userForm') form: any;

  /* nameTemp: string;
  ageTemp: number;
  doorTemp: string;
  flatTemp: number;
  streetTemp: string;
  imageTemp: string; */

  u: User = {
    name: '',
    age: null,
    address: {
      DoorNum: 'A4',
      FlatNum: 2,
      Street: 'TNGO Colony',
    },
    image: '',
    email:'',
    isActive: true,
    balance: 500000,
    registered: new Date('24/02/2005 08:52:45'),
    hide: true
  }

  constructor() { }

  addUser(): void {
    this.users.push(this.u)
  }

  ngOnInit(): void {
    this.enableAdd = true;
    //this.showExtended = true;
    this.loaded = 0;

    setTimeout(() => {
      this.users = [{
        name: 'Aiswarya Balachandar',
        age: 21,
        address: {
          DoorNum: 'A4',
          FlatNum: 2,
          Street: 'TNGO Colony Extn',
        },
        image: "https://picsum.photos/id/1/300",
        email:'aischandar@gmail.com',
        isActive: true,
        balance: 1300000,
        registered: new Date('24/02/2005 08:52:45'),
        hide: true
      },
      {
        name: 'Abhishek Balachandar',
        age: 19,
        address: {
          DoorNum: 'A4',
          FlatNum: 2,
          Street: 'TNGO Colony Extn',
        },
        image: "https://picsum.photos/id/2/300",
        isActive: false,
        balance: 1500000,
        email:'abhi@gmail.com',
        registered: new Date('24/02/2005 08:52:45'),
        hide: true
      },
      {
        name: 'Vandana Venkatraman',
        age: 22,
        address: {
          DoorNum: 'A4',
          FlatNum: 2,
          Street: 'Sannadhi Street',
        },
        image: "https://picsum.photos/id/3/300",
        isActive: true,
        balance: 500000,
        email:'vandoo@gmail.com',
        registered: new Date('24/02/2005 08:52:45'),
        hide: true
      },
      {
        name: 'Divya Raman',
        address: {
          DoorNum: 'A4',
          FlatNum: 2,
          Street: 'Chennai',
        },
        image: "https://picsum.photos/id/4/300",
        isActive: true,
        email:'Divya@gmail.com',
        balance: 800000,
        registered: new Date('24/02/2005 08:52:45'),
        hide: true
      }
      ]
      this.loaded = 1;
    }, 2000);


    console.log(this.loaded);

  }

  AddUserOnClickHandler(): void {    
    this.showForm = true;
  }

  /*   NameBoxHandler(e) {
      this.nameTemp = e.target.value;
      console.log(this.nameTemp)
    }
    AgeBoxHandler(e) {
      this.ageTemp = e.target.value;
    }
    DoorBoxHandler(e) {
      this.doorTemp = e.target.value;
    }
    FlatBoxHandler(e) {
      this.flatTemp = e.target.value;
    }
    StreetBoxHandler(e) {
      this.streetTemp = e.target.value;
    }
    ImageUrlBoxHandler(e) {
      this.imageTemp = e.target.value;
    }
    NewUserSubmitButtonHandler(e: Event){
      e.preventDefault();
      console.log(this.nameTemp)
      let u: User = {
        name: this.nameTemp,
        address: {
          DoorNum: this.doorTemp,
          FlatNum: this.flatTemp,
          Street: this.streetTemp,
        },
        image: this.imageTemp,
        isActive: true,
        balance: 500000,
        registered: new Date('24/02/2005 08:52:45'),
        hide: true
      } 
      this.addUser(u);     
    } */

  HideButtonOnClickHandler(u: User) {
    console.log(u.hide);
    u.hide = !u.hide;
    console.log(u.hide);
  }

/*   OnSubmit({value, valid} : {value: User, valid: boolean}): void{
    if(!valid){
      console.log("Form not valid")
    }
    else{
      alert("Submit button clicked")
      value.isActive= true;
      value.registered= new Date('24/04/1999 07:45:45');
      value.balance = 7690000;
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    } */

    OnSubmit(): void{
        this.users.unshift(this.u)
      }

  

  

}
