import { Injectable } from '@angular/core';
import { CategoryMapper } from '../_mappers/wildcards_mappers';
import { Category } from '../_models/wildcards_models';
import Categories from  '../../assets/_data/wildcards_data.json';

@Injectable({
  providedIn: 'root'
})
export class WildcardService {

  categoryMapper:CategoryMapper = new CategoryMapper();

  constructor() { }

  getCategories(): Category[] {
    return this.categoryMapper.mapArrayToCategories(Categories);
  }
}
