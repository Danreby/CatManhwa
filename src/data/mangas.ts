export type Manga = {
  id: string;
  title: string;
  author?: string;
  chaptersRead?: number;
  totalChapters?: number;
  genres?: string[];
  coverUri?: string;
  isRead?: boolean;
};

export const SAMPLE_MANGAS: Manga[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  title: `Manga ${i + 1}`,
  author: i % 2 === 0 ? "Autor Exemplo" : "Autor B",
  chaptersRead: Math.floor(Math.random() * 50),
  totalChapters: 100,
  genres: [["Ação"], ["Romance"], ["Comédia"]][i % 3],
  coverUri: `https://picsum.photos/seed/manga${i}/300/400`,
  isRead: i % 3 === 0,
}));
