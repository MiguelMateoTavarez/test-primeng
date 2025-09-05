import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FakeStoreProductsResponse } from '../interfaces/fakestore-products-response.interface';
import { Observable } from 'rxjs';
import { FakeStoreCartsResponse } from '../interfaces/fakestore-carts.interface';
import { FakeStoreUserResponse } from '../interfaces/fakestore-users.interface';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAllProducts(): Observable<FakeStoreProductsResponse[]> {
    return this.http.get<FakeStoreProductsResponse[]>(
      `${this.apiUrl}/products`
    );
  }

  getProductById(id: number): Observable<FakeStoreProductsResponse> {
    return this.http.get<FakeStoreProductsResponse>(
      `${this.apiUrl}/products/${id}`
    );
  }

  getAllCarts(): Observable<FakeStoreCartsResponse[]> {
    return this.http.get<FakeStoreCartsResponse[]>(`${this.apiUrl}/carts`);
  }

  getCartById(id: number): Observable<FakeStoreCartsResponse> {
    return this.http.get<FakeStoreCartsResponse>(`${this.apiUrl}/carts/${id}`);
  }

  getAllUsers(): Observable<FakeStoreUserResponse[]> {
    return this.http.get<FakeStoreUserResponse[]>(`${this.apiUrl}/users`);
  }

  getUserById(id: number): Observable<FakeStoreUserResponse> {
    return this.http.get<FakeStoreUserResponse>(`${this.apiUrl}/users/${id}`);
  }
}
