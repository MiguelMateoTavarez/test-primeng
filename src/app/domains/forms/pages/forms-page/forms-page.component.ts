import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/message';
import { DatePicker } from 'primeng/datepicker';
import { Fluid } from 'primeng/fluid';

import { FakeStoreApiService } from '../../../../shared/services/fakestore-api.service';
import { FakeStoreProductsResponse } from '../../../../shared/interfaces/fakestore-products-response.interface';
interface AutoCompleteEvent {
  originalEvent: Event;
  query: string;
}

interface Item {
  id: number;
  title: string;
}

@Component({
  selector: 'app-forms-page',
  imports: [
    ReactiveFormsModule,
    AutoCompleteModule,
    FloatLabel,
    ButtonModule,
    Message,
    DatePicker,
    Fluid
  ],
  templateUrl: './forms-page.component.html',
  styleUrl: './forms-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsPageComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly fakeStoreApiService = inject(FakeStoreApiService);

  formSubmitted = signal<boolean>(false);

  items = signal<Item[]>([]);
  filteredItems = signal<Item[]>([]);

  productForm = this.formBuilder.group({
    productId: ['', [Validators.required]],
    time12: [''],
    time24: ['']
  });

  ngOnInit(): void {
    this.fakeStoreApiService
      .getAllProducts()
      .pipe(
        map((products: FakeStoreProductsResponse[]) => {
          return products.map((product) => ({
            id: product.id,
            title: product.title,
          }));
        })
      )
      .subscribe({
        next: (data) => this.items.set(data),
        error: (err) => console.error(err),
      });
  }

  filterItems({ query }: AutoCompleteEvent) {
    let filtered: Item[] = [];
    for (let i = 0; i < this.items().length; i++) {
      let item = this.items()[i];
      if (item.title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredItems.set(filtered);
  }

  private formSubmittedToggle(): void {
    this.formSubmitted.update((value) => !value);
  }

  private handleSelectInput(controlName: string): void {
    const value: Item = this.productForm.get(controlName)?.value;
    this.productForm.get(controlName)?.setValue(value.id);
  }

  // INFO: solo usar para obtener la key de un autocomplete o select.
  private getSelectOptionKey(controlName: string): number | string {
    const value: Item = this.productForm.get(controlName)?.value;
    return value.id;
  }

  handleSubmit() {
    this.formSubmittedToggle();

    if(this.productForm.invalid) {
      this.productForm.markAllAsTouched;
      this.productForm.markAllAsDirty;
      this.productForm.reset();
      this.formSubmittedToggle();
    }

    this.handleSelectInput('productId');

    console.log(this.productForm.value);
  }

  isInvalid(controlName: string) {
    const control = this.productForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted());
  }
}
