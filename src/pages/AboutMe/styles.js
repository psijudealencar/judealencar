import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    
    position: relative;
    padding-inline: 10%;
    background: ${({ theme }) => theme.COLORS.GREY};

    display: grid;
    place-content: center;

    font-family: ${({ theme }) => theme.FONTS.MAIN_FONT};
    font-size: clamp(1.2rem, calc(1rem + 1vw), 2rem);
    text-align: justify;

    .title {
        color: ${({ theme }) => theme.COLORS.PURPLE};
        font-size: clamp( 2rem, calc(2rem + 2vw), 3rem);
        font-weight: bold;
    }

    .profile-pic {
        margin: 2rem 0;
        object-fit: cover;
        border-radius: 8rem;
        box-shadow: .7rem .7rem .5rem rgba(0, 0, 0, 0.4);
        height: auto;
    }

    span {
        font-weight: 600;
    }
    
    /* Desktop */
    @media (min-width: 600px) {
        .title {
            font-size: clamp( 3rem, calc(2rem + 2vw), 5rem);
        }

        .profile-pic {
            grid-column-start: 1;
            height: 100%;
        }

        .about p {
            line-height: 1.5;
            font-size: calc(14px + (18 - 14) * (100vw - 600px) / (800 - 400));
        }

        .flex-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 10rem;
        }
    }
`;
