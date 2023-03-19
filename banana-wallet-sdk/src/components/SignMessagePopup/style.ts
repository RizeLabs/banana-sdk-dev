import { styled } from 'goober';

export const styles = {
    Wrapper : styled('div')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 25%;
        padding: 3.125rem 2rem;
        background-color: #000000;
    `,

    TextWrap : styled('div')`
        text-align: left;
    `,

    Subtitle : styled('p')`
        font-size: 1.25rem;
        font-family: 'Tahoma';
        color: #ffffff;
        margin-top: 2.5rem;
    `,

    Desc : styled('p')`
        font-size: 0.875rem;
        font-family: 'Tahoma';
        color: #C0C0C0;
        line-height: 1.313rem;
        width: 100%;
    `,
    ButtonWrap : styled('div')`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 25vh;
    `,
    ContentWrap : styled('div')`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 70vh;
    `,
}