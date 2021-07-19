import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  myModel : any =150000;
  options: Options = {
    floor: 100000,
    ceil: 300000,
    showSelectionBar: true,
    translate: (myModel: number, label: LabelType): string => {
      return '&#8377;' + myModel.toLocaleString('en');
    }
  };
  myModel1 : number = 50000;
  options1: Options = {
    floor: 0,
    ceil: 100000,
    showSelectionBar: true,
    translate: (myModel: number, label: LabelType): string => {
      return '&#8377;' + myModel.toLocaleString('en');
    }
  };
  foods: Food[] = [
    {value: '1', viewValue: '3 Months'},
    {value: '2', viewValue: '6 Months'},
    {value: '3', viewValue: '9 Months'},
    {value: '4', viewValue: '12 Months'}
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
