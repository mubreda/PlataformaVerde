/* eslint-disable linebreak-style */

import styled, { css } from 'styled-components';
import get from 'lodash/get';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import { TextStyleVariants } from '../../foundation/Text';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: white;
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${propToStyle('margin')}
  ${propToStyle('display')}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
