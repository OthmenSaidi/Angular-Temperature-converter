import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  fahrenheitValue: number;
  celsiusValue: number;

  ngOnInit() {

    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }
  onChange1(e){
   
   this.fahrenheitValue = parseFloat(((e*9/5)+32).toFixed(1));


  }
  onChange2(e){

     this.celsiusValue= parseFloat(((e-32)*5/9).toFixed(1));


  }

}

