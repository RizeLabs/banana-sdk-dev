import { styled } from "goober";

export const SharedStyles = {
    Divider: styled('div')`
        width: 100%;
        border-top: 1px solid #444444;
    `,
    PrimaryButton: styled('button')`
        width: 100%;
        background-color: #FFD42B;
        color: #000000;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        padding: 1.125rem 1rem;
        font-family: 'Tahoma';
        @include flexBox(row, center, center);
        &:hover {
            background-color: #000000 !important;
            color: #FFD42B !important;
        }
    `,
    SecondaryButton: styled('button')`
        width: 100%;
        color: #ffffff;
        cursor: pointer;
        font-family: 'Tahoma';
        background-color: transparent;
        border-radius: 8px;
        border: 1px solid #FFD42B;
        padding: 1.125rem 1rem;
        &:hover {
            background-color: #000000;
            color: #FFD42B;
        }
    `,
};