import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  private readonly newProperty = { id: 1, name: 'Watch finding Nemo', description: 'Find an online version and watch merlin find his son' };

  private readonly newProperty_1 = this.newProperty;

  goals:Goal[] = [
    this.newMethod(),
    this.newMethod_1(),
    {id!:3,name!:'Get new Phone Case',description!:'Diana has her birthday coming up soon'},
    {id!:4,name!:'Get Dog Food',description!:'Pupper likes expensive sancks'},
    {id!:5,name!:'Solve math homework',description!:'Damn Math'},
    {id!:6,name!:'Plot my world domination plan',description!:'Cause I am an evil overlord'},
  ];


  constructor() { }

  private newMethod_1(): Goal {
    return { id: 2, name: 'Buy Cookies', description: 'I have to buy cookies for the parrot' };
  }

  private newMethod(): Goal {
    return this.newProperty_1;
  }

  ngOnInit(): void {
  }

}
