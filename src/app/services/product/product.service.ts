
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductEntity } from 'src/app/Entity/ProductEntity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {  }
  getAllProducts() : Observable<ProductEntity[]>{
    return this.http.get<ProductEntity[]>("http://localhost:8080/product/all");
  }
  getProductById(idProduct: number):Observable<ProductEntity>{
    return this.http.get<ProductEntity>(`http://localhost:8080/product/${idProduct}`);
  }
  updateProduct(productToUpdate:number):Observable<ProductEntity>{

    //this.deleteProduct(prod);
    //this.addProduct(prod);
    return this.http.post<ProductEntity>("http://localhost:8080/product",productToUpdate);
  }
  RemoveProduct(idProduct:number):Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/product/delete/${idProduct}`);
  }
  addProduct(newProduct:ProductEntity):Observable<ProductEntity>{
    return this.http.post<ProductEntity>("http://localhost:8080/product/create",newProduct);
  }
  deleteProduct(idProduct: number):Observable<any>{
      return this.http.post<any>("http://localhost:8080/product/deleteProduct",idProduct);
  }
  findProductByCategory(idCategorie:number) : Observable<ProductEntity[]>{
    return this.http.post<ProductEntity[]>("http://localhost:8080/product/searchByCategory",idCategorie);
  }

}
