import axios from 'axios';

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';

export const locationService = {
  async searchLocations(
    query: string,
  ): Promise<{ label: string; value: string }[]> {
    try {
      const response = await axios.get(NOMINATIM_URL, {
        params: {
          q: query,
          format: 'json',
          addressdetails: 1,
        },
      });

      return response.data.map((result: any) => ({
        label: result.display_name,
        value: `${result.lat},${result.lon}`,
      }));
    } catch (error) {
      console.error('Error fetching locations:', error);
      return [];
    }
  },
};