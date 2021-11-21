import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe de mostrase correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('no debe de postear la info con submit', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Simulación chida';
    let input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    // expect(input.text()).toBe('');
    expect(input.prop('value')).toBe('');
  });
});
