import { Category, SubCategory } from "../_models/wildcards_models";

export class CategoryMapper{

    mapArrayToCategories(jsonData: any): Category[]{
        const categories: Category[] = [];

        jsonData["Categories"].map((category: { Name: string; SubCategories: SubCategory[]; }) => {
            categories.push(new Category(category.Name, category.SubCategories))
        })
        return categories;
    }
}