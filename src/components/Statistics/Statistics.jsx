import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  Item,
  Label,
  Percent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percent }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percent>{percent}%</Percent>
            </Item>
          );
        })}
      </StatList>
    </Container>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percent: PropTypes.number.isRequired,
    })
  ),
};
