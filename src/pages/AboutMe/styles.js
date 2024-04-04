import styled from "styled-components";

export const Container = styled.div`
    height: 94.5svh;

  position: relative;
  padding-inline: 10%;
  background: ${({ theme }) => theme.COLORS.GREY};

  font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
  font-size: clamp(1rem, calc(1rem + 1vw), 2rem);

  .grid-wrapper {
    padding-top: 2rem;
    display: grid;
    grid-template-rows: max-content 1fr;
    gap: 2rem;
  }

  .title {
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: clamp(2rem, calc(2rem + 2vw), 3rem);
    font-weight: bold;
  }

  .profile-pic {
    object-fit: cover;
    border-radius: 8rem;
    box-shadow: 0.7rem 0.7rem 0.5rem rgba(0, 0, 0, 0.4);
    max-height: 40rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: 600;
  }

  /* Desktop */
  @media (min-width: 600px) {
    display: grid;
    place-content: center;
    .title {
      font-size: clamp(3rem, calc(2rem + 2vw), 5rem);
    }

    .profile-pic {
      grid-column-start: 1;
      height: 100%;
    }

    .about p {
      line-height: 1.5;
      font-size: calc(14px + (16.7 - 14) * (100vw - 600px) / (800 - 400));
    }

    .flex-wrapper {
      display: grid;
      column-gap: 10rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
