export class Category{
    constructor(
        public readonly Name: string,
        public readonly SubCategories: SubCategory[],
    ){}
}

export class SubCategory{
    constructor(
        public readonly Name: string,
        public readonly Items: string[],
    ){}
}



