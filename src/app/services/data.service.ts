import { Injectable } from '@angular/core';
import { User } from '../models/User'


@Injectable({
  providedIn: 'root'
})
export class DataService{
  users: User[];

  constructor() { 
      
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
    ];    
  }
  
  getUsers(): User[] {
    return this.users;
  } 

  addUser(user: User): void{
    this.users.unshift(user);
  }

}

