import styled from "styled-components";

export const Container = styled.div`
  height: 94.5svh;

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
    text-align: center;

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
      margin-top: 5%;
      line-height: 1;
      flex-wrap: nowrap;
      justify-content: center;
      gap: 5%;

      img {
        max-width: 10rem;
        margin-bottom: 2rem;
      }

      figure {
        margin-inline: 0;
      }

      figcaption {
        font-size: clamp(1.4rem, calc(1rem + 1vw), 1.6rem);
        max-width: 25rem;
      }
    }
  }
`;
