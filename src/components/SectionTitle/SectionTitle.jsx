import PropTypes from 'prop-types';
import { SectionTitle, Title } from './SectionTitle.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTitle>
      <Title>{title}</Title>
      {children}
    </SectionTitle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
