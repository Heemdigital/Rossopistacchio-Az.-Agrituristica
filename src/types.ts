export type Language = 'it' | 'en';

export type EnquiryType = 'table' | 'event' | 'produce';

export interface BookingEnquiry {
  type: EnquiryType;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  occasion?: string;
}

export interface GalleryItem {
  id: string;
  category: 'all' | 'food' | 'setting' | 'garden' | 'events';
  titleIt: string;
  titleEn: string;
  descIt: string;
  descEn: string;
  mediaKey:
    | 'cuisine-ravioli'
    | 'cuisine-pasta'
    | 'cuisine-antipasto'
    | 'cuisine-dessert'
    | 'garden-table'
    | 'interior-dining'
    | 'events-celebration'
    | 'hero-estate'
    | 'produce-harvest';
  aspectRatio: '16:9' | '4:3' | '3:4';
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  quoteIt: string;
  quoteEn: string;
  focusIt: string;
  focusEn: string;
}

export interface MenuItem {
  id: string;
  category: 'antipasti' | 'primi' | 'secondi' | 'dolci';
  titleIt: string;
  titleEn: string;
  descIt: string;
  descEn: string;
  tagIt: string;
  tagEn: string;
}
