import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-e',
  templateUrl: './f787-part-e.component.html',
  styleUrls: ['./f787-part-e.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartEComponent implements OnInit {
  public today: Date = new Date();
  showhidepregnant: boolean;
  constructor() { }

  ngOnInit() {
  }

  stateChanged(): void {
    alert('test');
  }

      public diseaselement: boolean = false;
      public isChecked: boolean=false;
      showDiseaseElement():void{
          if(this.diseaselement){
              this.diseaselement = false;
          }else{
              this.diseaselement = true;
            }
      }

}
