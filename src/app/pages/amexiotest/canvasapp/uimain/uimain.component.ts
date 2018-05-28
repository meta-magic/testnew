/**
 * Created by: MetaMagic
 * Date: 28/05/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'uimain',
  templateUrl: 'uimain.component.html'
})
export class UimainComponent implements OnInit{
  uimainModel:UimainModel;
 
  constructor(private http: HttpClient) {
    this.uimainModel=new UimainModel();
       }
    ngOnInit(){
  }
 

   
}
export class UimainModel{
 }
