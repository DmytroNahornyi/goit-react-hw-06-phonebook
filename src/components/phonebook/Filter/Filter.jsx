import { useDispatch, useSelector } from 'react-redux';
import { Label, Input, FilterContainer } from './Filter.styled';
import { getVisibleContact } from 'redux/filter';

function Filter() {
  const filter = useSelector(state => state.filterValue);
  const dispatch = useDispatch();

  return (
      <Label>
        <FilterContainer>Find contacts by name</FilterContainer>
        <Input type="text" value={filter} onChange={e => dispatch(getVisibleContact(e.target.value))} />
      </Label>
  );
}

export default Filter;
