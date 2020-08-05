import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { Raster, Path, Project } from 'paper';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-canvas-draw',
  templateUrl: './canvas-draw.component.html',
  styleUrls: ['./canvas-draw.component.css']
})
export class CanvasDrawComponent implements AfterViewInit  {
  @ViewChild('canvas', {static: false }) canvas: ElementRef;
  // TODO: Fix types
  project: any;
  path: any;

  raster: any;
  @Input() imageURL: string;

  @Input() strokeColor = '#c92b39'; // default red
  @Input() strokeWidth = 1;

  constructor() {}

  ngAfterViewInit() {
    // Create new project / canvas
    this.project = new Project(this.canvas.nativeElement);

    // Check if image url is provided
    if (this.imageURL) {
      // Draw the image on the canvas
      this.raster = new Raster(this.imageURL);
      // Center the image
      this.raster.position = this.project.view.center;
    }

    // Bind mouse events
    this.project.view.onMouseDown = this.onMouseDown.bind(this);
    this.project.view.onMouseDrag = this.onMouseDrag.bind(this);
    this.project.view.onMouseUp = this.onMouseUp.bind(this);

  }

  onMouseDown() {
    // Create new path
    this.path = new Path();
    // Sets the stroke width
    this.path.strokeWidth = this.strokeWidth;
    // Sets the stroke color
    this.path.strokeColor = this.strokeColor;
  }

  onMouseDrag(event: any) {
    // Every drag event, add a point to the path at the current
    // position of the mouse:
    this.path.add(event.point);
  }

  onMouseUp() {
    // When the mouse is released, simplify it:
    this.path.simplify();
  }

  onSave() {

    this.project.view.draw();
    console.log(this.project.view.element);
    // tslint:disable-next-line: only-arrow-functions
    this.project.view.element.toBlob( function(blob: Blob) { saveAs(blob, 'image.png'); });
  }
}
