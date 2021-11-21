import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('should match snapshot', () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier Cosa',
      },
      {
        id: '123',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier Cosa',
      },
    ];
    useFetchGifs.mockReturnValue({ data: gifs, loading: false });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
