import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/wildcards_models';
import { CopyContentService } from 'src/app/_services/copy-content.service';
import { WildcardService } from 'src/app/_services/wildcard.service';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {

  categoriesData: Category[] = [];
  categorySelected: Category | undefined;
  itemSelected: string = " ";

  constructor(
    private wildcardsService: WildcardService, 
    private copyContentService: CopyContentService
  ){ }

  ngOnInit(): void {
    this.categoriesData = this.wildcardsService.getCategories();

  }

  getCategorySelected(category: Category){
    this.categorySelected = category;
  }

  optionSelected(event: Event): void {
    this.itemSelected += `${event.target["value"]}, `;
    console.log(event.target["value"]);
  }

  detectInputInTextArea(event: Event): void {
    this.itemSelected = event.target["value"];
  }

  doCopy(): void {
    this.copyContentService.copyText(this.itemSelected);
  }
}
