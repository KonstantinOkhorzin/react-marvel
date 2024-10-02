import { ServerCharactersData } from '../types/characters';
import { ServerComicsData } from '../types/comics';

const canLoadMore = ({
  data: { total, offset, count },
}: ServerComicsData | ServerCharactersData): boolean => {
  return total - (offset + count) > 0;
};

export default canLoadMore;
