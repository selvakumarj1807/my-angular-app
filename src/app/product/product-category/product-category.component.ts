import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
title: string = 'All Departement';
categories = [
  {categoryId: 1, categoryName: 'Fresh Meat'},
  {categoryId: 2, categoryName: 'Vegetables'},
  {categoryId: 3, categoryName: 'Fruit & Nut Gifts'},
  {categoryId: 4, categoryName: 'Fresh Berries'},
  {categoryId: 5, categoryName: 'Ocean Foods'},
  {categoryId: 6, categoryName: 'Butter & Eggs'},
  {categoryId: 7, categoryName: 'Fastfood'},
  {categoryId: 8, categoryName: 'Fresh Onion'},
  {categoryId: 9, categoryName: 'Papayaya & Crisps'},
  {categoryId: 10, categoryName: 'Oatmeal'},
  {categoryId: 11, categoryName: 'Fresh Bananas'},
];
}


/*
Data Bindings :
---------------
Interpolation (One-Way Binding {{ expression }}): 
-------------------------------------------------
Interpolation is a one-way binding technique where values from the component class are bound to the HTML 
template It is denoted by double curly braces {{ }}.
*/