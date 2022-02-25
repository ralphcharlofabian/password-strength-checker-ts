
import * as reactRedux from 'react-redux'
import PasswordStrengthChecker from ".";

describe('test suite', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  })

  it('check for dispatch items', () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    expect(dummyDispatch).not.toHaveBeenCalled()
  })

  it('check for selector', () => {
    const dummySelector = jest.fn()
    useSelectorMock.mockReturnValue(dummySelector)
    expect(dummySelector).not.toHaveBeenCalled()
  })
})

test('initial test if working', () => {
  expect(true).toBe(true);
});


