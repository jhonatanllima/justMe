import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;
  min-height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 800px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 780px) {
    flex-direction: column;
  }

  aside {
    width: 100%;
    padding: 0 1rem;

    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 902px) {
      margin-top: 5rem;
    }

    h1 {
      z-index: 5;

      margin-top: 0.2rem;

      font-weight: 900;
      font-size: 4.5rem;
      line-height: 4.5rem;

      @media (max-width: 902px) {
        font-size: 3.5rem;
      }
    }

    p {
      z-index: 4;

      max-width: 450px;
      margin-top: 1rem;

      font-size: 1rem;
      text-align: end;
      line-height: 1.4;
      font-weight: lighter;
      color: var(--gray-300);
      letter-spacing: 0.2rem;
    }

    > a {
      margin-top: 1rem;
      padding: 1rem 2rem;

      gap: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0.3;
      border: 2px solid var(--gray-300);

      
      &:hover {
        cursor: pointer;
        filter: brightness(1.8);
      }
    }

    section {
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;

      justify-content: flex-end;
    }

    + aside {
      width: 100%;
      align-items: center;

      > div {
        position: relative;

        width: 25rem;
        height: 35rem;

        border: 3px solid var(--gray-800);

        @media (max-width: 902px) {
          width: 20rem;
          height: 30rem;
          margin-bottom: 10rem;
        }

          div {
            top: 2rem;
            left: 2rem;
            position: absolute;

            width: 100%;
            height: 100%;

            > img {
              width: 100%;
              height: 100%;
            }
          }


        h3 {
          right: -40%;
          bottom: 2rem;
          position: absolute;

          font-size: 3rem;
          letter-spacing: 1rem;
          color: var(--blue-100);
          transform: rotate(90deg);
        }
      }
    }
  }
`;
