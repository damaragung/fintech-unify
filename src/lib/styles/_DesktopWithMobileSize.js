import { injectGlobal } from 'emotion'
import { colors } from './utils/_ColorStyle'
import { breakpoints } from './utils/_BreakpointStyle'

export const desktopWithMobileSize = injectGlobal`
.core-layout__viewport, .unf-bottomsheet, .unf-toaster, .unf-btn__floating-container, .unf-coachmark {
    max-width: ${breakpoints.small};
    margin: auto;
    left: 0;
    right: 0;
  }
  .unf-coachmark {
    @media (min-width: ${breakpoints.medium}) {
      &:after {
        display: none;
      }
    }
  }
  .core-layout__viewport {
    border-left: 1px solid ${colors.grayAlto};
    border-right: 1px solid ${colors.grayAlto};
    @media (max-width: ${breakpoints.small}) {
      border: 0;
    }
    @media (min-width: ${breakpoints.small}) {
      min-height: 100vh;
    }
  }
`