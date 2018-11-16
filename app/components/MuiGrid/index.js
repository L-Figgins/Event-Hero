import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const FullWidthStyledGrid = styled(Grid)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const StyledGrid = props => <FullWidthStyledGrid {...props} />;

// const StyledPaper = styled(Paper)`
//   border: 1px;
//   border-color: black;
// `;

// function FullWidthGrid() {
//   return (
//     <div>
//       <StyledGrid container spacing={24}>
//         <StyledGrid item xs={12}>
//           <StyledPaper>xs=12</StyledPaper>
//         </StyledGrid>
//         <StyledGrid item xs={12} sm={6}>
//           <StyledPaper>xs=12 sm=6</StyledPaper>
//         </StyledGrid>
//         <StyledGrid item xs={12} sm={6}>
//           <StyledPaper>xs=12 sm=6</StyledPaper>
//         </StyledGrid>
//         <StyledGrid item xs={6} sm={3}>
//           <StyledPaper>xs=6 sm=3</StyledPaper>
//         </StyledGrid>
//         <StyledGrid item xs={6} sm={3}>
//           <StyledPaper>xs=6 sm=3</StyledPaper>
//         </StyledGrid>
//         <StyledGrid item xs={6} sm={3}>
//           <StyledPaper>xs=6 sm=3</StyledPaper>
//         </StyledGrid>
//         <StyledGrid item xs={6} sm={3}>
//           <StyledPaper>xs=6 sm=3</StyledPaper>
//         </StyledGrid>
//       </StyledGrid>
//     </div>
//   );
// }

export default StyledGrid;
