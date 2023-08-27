import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number, sort?: string, search?: string) {
    let params = new HttpParams();
    
    if (brandId) params = params.append('brandId', brandId.toString());
    if (typeId) params = params.append('typeId', typeId.toString());
    if (sort) params = params.append('sort', sort);
    if (search) params = params.append('search', search);
    return this.http.get(this.baseUrl + 'products', {params});
  }

  getBrands() {
    return this.http.get(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get(this.baseUrl + 'products/types');
  }

  getProduct(id: number) {
    return this.http.get(this.baseUrl + 'products/' + id);
  }
}