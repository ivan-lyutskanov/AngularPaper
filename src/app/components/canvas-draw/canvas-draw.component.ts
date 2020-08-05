import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PaperScope, Path, Project } from 'paper';

@Component({
  selector: 'app-canvas-draw',
  templateUrl: './canvas-draw.component.html',
  styleUrls: ['./canvas-draw.component.css']
})
export class CanvasDrawComponent implements AfterViewInit  {
  @ViewChild('canvas', {static: false }) canvas: ElementRef;
  // TODO: Fix types
  scope: any;
  project: any;
  path: any;

  constructor() {}

  ngAfterViewInit() {
    this.scope = new PaperScope();
    this.project = new Project(this.canvas.nativeElement);

    // this.path = new Path();

    // this.path.onMouseDown = function (event: any) {
    //   console.log(event);
    // };
    // this.project.activeLayer.addChild(this.path);

    // draw a circle (test)
    const circle = new Path.Circle({
      center: this.scope.view.center,
      radius: 80,
      fillColor: 'red',
    });

    circle.onMouseDrag = this.onMouseDrag;
  }

  // onMouseDown() {
  //   this.path.strokeColor = "black";
  // }

  onMouseDrag(event: any) {
    // Every drag event, add a point to the path at the current
    // position of the mouse:
    // this.path.add(event.point);

    // Move the circle
    event.target.position = event.point;
    // console.log(event);
  }

  onMouseUp() {
    // When the mouse is released, simplify it:
    // this.path.simplify();
  }
}
