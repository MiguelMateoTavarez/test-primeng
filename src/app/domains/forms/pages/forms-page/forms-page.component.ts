import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

interface AutoCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-forms-page',
  imports: [FormsModule, AutoCompleteModule],
  templateUrl: './forms-page.component.html',
  styleUrl: './forms-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsPageComponent {
  items: any[] = [];

  value: any;

  search(event: AutoCompleteEvent) {
    let _items = [...Array(10).keys()];
    this.items = event.query
      ? [...Array(10).keys()].map((item) => event.query + '-' + item)
      : _items;
  }
}
