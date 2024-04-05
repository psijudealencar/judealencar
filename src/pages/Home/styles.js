import styled from "styled-components";

export const Container = styled.div`
    .content {
    height: 94.5svh;

    position: relative;
    background: ${({ theme }) => theme.COLORS.CREAM};
    display: grid;
    place-content: center;
    }

    .banner {
        position: absolute;
        width: 100%;
        z-index: 5;
        background-color: #FFF;
    }

    .top {
        height: 5vh;
        top: 0;
    }

    .bottom {
        height: 5vh;
        bottom: 0;
    }

    .flex-wrapper {
        margin-top: 5rem;
        display: grid;
        place-items: center;
        gap: 3rem;

        img {
            max-width: 50%;
        }
    }

    .flex-wrapper button {
        margin-bottom: 10%;

        width: 65%;
        font-size: 1.4rem;
        background: #FFF;
        padding: 1rem 3rem;
        border-radius: 10rem;

        color: #282828;
        
        a {
            display: flex;
            gap: 1rem; /* Alterado para 1rem como padrão */
            align-items: center;
            justify-content: center;

            color: #282828;
        }
    }

    p {
        place-self: end;
        text-align: end;
        margin-right: 5%;
        font-weight: 300;
        font-style: italic;
        font-size: 1.4rem;
        line-height: 2.1rem;

        span {
            font-weight: 400;
            font-style: normal;
        }
    }

    /* Desktop */
    @media (min-width: 600px) {
        .flex-wrapper img {
            max-width: 40%; /* Redefinido para 40% dentro da media query para desktop */
        }

        .flex-wrapper button {
            margin-bottom: 0%;
            width: 20%; /* Redefinido para 20% dentro da media query para desktop */
            font-size: 1.6rem; /* Redefinido para 1.6rem dentro da media query para desktop */

            a {
                gap: 3rem; /* Redefinido para 3rem dentro da media query para desktop */
            }
        }
    }
`;
