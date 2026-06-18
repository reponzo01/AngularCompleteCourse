import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input({required: true}) size!: { width: string; height: string };
  // The name is important! The name of the Input plus 'Change' tells Angular that the Input and Output belong together and create a two-way bindable property.
  @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  onReset() {
    this.sizeChange.emit({
      width: '200',
      height: '100'
    });
  }
}
