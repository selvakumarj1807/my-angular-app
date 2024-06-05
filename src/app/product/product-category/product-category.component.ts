import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { categories } from '../../shared/constants/data.model';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
title: string = 'All Departement';
categories = categories;
}


/*
Data Bindings :
---------------
Interpolation (One-Way Binding {{ expression }}): 
-------------------------------------------------
Interpolation is a one-way binding technique where values from the component class are bound to the HTML 
template It is denoted by double curly braces {{ }}.


Property Binding :
------------------
(One-Way Binding I [property]="expression"): 
Property binding allows you to set the value of an HTML element property to the value of a component property. It is denoted by square brackets [].
*/