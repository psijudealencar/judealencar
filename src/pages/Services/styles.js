import styled from "styled-components";

export const Container = styled.div`
  height: calc(100dvh - 5rem);

  position: relative;
  background: ${({ theme }) => theme.COLORS.GREEN};
  padding-inline: 10%;
  display: grid;
  padding-top: 2rem;

  .title {
    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
    color: ${({ theme }) => theme.COLORS.CREAM};
    font-size: clamp(2rem, calc(2rem + 2vw), 3rem);
    font-weight: bold;
    max-width: 21rem;
  }

  .flex-wrapper {
    margin-top: 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;

    figure {
      margin-bottom: 2rem;
      margin-inline: auto;

      img {
        max-width: 8rem;
      }

      figcaption {
        font-size: clamp(1.2rem, calc(1rem + 1vw), 1.4rem);
        width: 12rem;
        text-align: center;
        line-height: 1.5;
      }
    }
  }

  /* Desktop */
  @media (min-width: 600px) {
    align-items: center;

    .title {
      max-width: max-content;
      font-size: clamp(3rem, calc(2rem + 2vw), 5rem);
    }

    .flex-wrapper {
      line-height: 1;
      flex-wrap: nowrap;
      gap: 10%;

      img {
        max-width: 10rem;
        margin-bottom: 2rem;
      }

      figcaption {
        font-size: clamp(1.4rem, calc(1rem + 1vw), 1.6rem);
        max-width: 25rem;
      }
    }
  }
`;
