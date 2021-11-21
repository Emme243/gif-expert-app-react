import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imgs y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
