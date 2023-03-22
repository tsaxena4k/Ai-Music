import axios from 'axios';

export default async function getMusicByMood(mood) {
  try {
    const response = await axios.get(
      "https://641a97d5f398d7d95d59fc57.mockapi.io/ai/v1/GetDataByMood"
    );
    return response.data.filter(x=>x.song_emotion===mood);
  } catch (error) {
    console.error(error);
  }
}
