export interface Product {
    title: string;
    data: GalleryPreviewData[];
}

export interface GalleryPreviewData {
    id: number;
    name: string;
    image: any;
}
