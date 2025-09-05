import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FakeStoreApiService } from '../../../../shared/services/fakestore-api.service';
import { FakeStoreProductsResponse } from '../../../../shared/interfaces/fakestore-products-response.interface';
import { Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-page',
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    RatingModule,
    FormsModule,
  ],
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePageComponent implements OnInit {
  private readonly fakeStoreApiService = inject(FakeStoreApiService);

  products: FakeStoreProductsResponse[] = [];
  loading: boolean = true;
  searchValue: string | undefined;

  ngOnInit() {
    this.fakeStoreApiService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
}
