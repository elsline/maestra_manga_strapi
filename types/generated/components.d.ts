import type { Schema, Attribute } from '@strapi/strapi';

export interface ChaptersChapter extends Schema.Component {
  collectionName: 'components_chapters_chapters';
  info: {
    displayName: 'chapter';
  };
  attributes: {
    chapter_name: Attribute.String;
    chapter_number: Attribute.Integer;
    colored: Attribute.Boolean;
    pages: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chapters.chapter': ChaptersChapter;
    }
  }
}
