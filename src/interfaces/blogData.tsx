export interface CategoriesData {
    id:          number;
    category:    string;
    description: string;
    image:       string;
    language:    string;
    created_at:  string;
    updated_at:  string;
    articles_count: string;
 }
 
 export interface ArticlesData {
    id:             number;
    id_subcategory: number;
    title:          string;
    description:    string;
    image:          string;
    url:            string;
    keywords:       string;
    status:         number;
    created_at:     string;
    updated_at:     string;
 }
 
 export interface SubcategoryData {
    id:          number;
    id_category: number;
    subcategory: string;
    language:    string;
    created_at:  string;
    updated_at:  string;
 }
 
 export interface ArticleDetail {
    id:         number;
    id_article: number;
    type:       string;
    content:    string;
    position:   number;
    created_at: string;
    updated_at: string;
 }