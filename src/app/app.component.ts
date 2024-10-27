import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Text Interpolation';
  name = 'Jerson';

  public image = "/assets/nature.jpg";
  imageWidth = 800;
  imageHeight = 500;

  attributeValue = "book-app-test-value";

  isSampleApplied = true;

  multipleClasses = "frcolor bgcolor";

  multipleStyles = "background-color: green; color: white;"

  timeNow = new Date();
  setTimeNow(){
    this.timeNow = new Date();
  }

  // color = '';
  // setTextColor(_color: string){
  //   console.log(_color);
  //   this.color = _color;
  // }

  pColor = "";
  setTextColor(_color: string){
    console.log(_color);
    this.pColor = _color
  }

  randomText = " ";
  
}
