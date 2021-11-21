import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en GifGridItem.js component', () => {
  const title = 'Un título';
  const url = 'https://localhots/ld.png';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un párrafo con el title', () => {
    const pText = wrapper.find('p').text().trim();
    expect(pText).toBe(title);
  });

  test('debe de tener la imagen con el url y alt de los props', () => {
    const imgAttrs = wrapper.find('img').props();
    // console.log(imgAttrs); // {src: 'Algo', alt: 'Algo'}
    expect(imgAttrs.src).toBe(url);
    expect(imgAttrs.alt).toBe(title);
  });

  test('debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    expect(div.prop('className')).toContain('animate__fadeIn');
  });
});
