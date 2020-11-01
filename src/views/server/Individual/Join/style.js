import styled from "styled-components"

export const Team = styled.div`
  margin-top: 25rem;
  letter-spacing: 1rem;

  .team-cell{
    display: flex;
    .label{
      margin-right: 20rem;
      min-width: 70rem;
      font-weight: bold;
    }

    .count{
      margin-left: 25rem;
    }
  }

  .team-cell+.team-cell{
    margin-top: 14rem;
  }
`