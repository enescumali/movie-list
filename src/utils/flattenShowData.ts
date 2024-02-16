import type { Show, ShowResponse } from '@/types/Show';

export const flattenShowData = (showResponse: ShowResponse): Show => {
  console.log(showResponse);

  return {
    id: showResponse.id,
    name: showResponse?.show || showResponse.name,
    image: showResponse.image?.medium,
    genres: showResponse.genres,
    summary: showResponse.summary,
    schedule: showResponse.schedule,
    rating: showResponse.rating?.average,
    season: showResponse.season,
    status: showResponse.status,
    network: showResponse.network?.name,
    webChannel: showResponse.webChannel?.name,
    officialSite: showResponse.officialSite,
    premiered: showResponse.premiered
  };
};
