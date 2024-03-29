export type movieType = {
  adult: boolean;
  backdrop_path: string | undefined;
  genres: Array<{ id: number; name: string }>;
  id: string;
  original_language: string | undefined;
  original_title: string | undefined;
  overview: string;
  popularity: number | undefined;
  poster_path: string;
  release_date: string;
  spoken_languages: Array<{ iso_639_1: string }>;
  title: string;
  video: boolean | undefined;
  vote_average: number | undefined;
  vote_cunt: number | undefined;
  runtime: number;
};

export type movieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | string;
  budget: number;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [{ id: number; logo_path: string; name: string; origin_country: string }];
  production_countries: [{ iso_3166_1: string; name: string }];
  release_date: number;
  revenue: number;
  runtime: number;
  spoken_languages: [{ english_name: string; iso_639_1: string; name: string }];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  //use Type
  userMovieState: {
    pick: boolean;
    cartState: boolean;
    count: number;
    startDate: string;
    endDate: string;
    price: number;
    ordered: boolean;
  };
};

export type movieImg = {
  backdrops: [
    {
      file_path: string;
    }
  ];
};
