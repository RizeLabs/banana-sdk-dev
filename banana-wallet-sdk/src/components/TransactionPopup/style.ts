import { styled } from "goober"

export const styles = {
    Wrapper: styled('div')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 25%;
        padding: 3.125rem 1rem;
    `,
    TextWrap: styled('div')`
        text-align: center;
    `,
    ButtonWrap : styled('div')`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    `,
    Header : styled('div')`
        font-size: 3rem;
        font-family: 'Helvetica Neue';
        color: #FBD025;
        margin-top: 2.25rem;
        margin-bottom: .313rem;
    `,

    SubHeader: styled('div')`
        font-size: 1.125rem;
        font-family: 'Helvetica Neue';
        color: #B4B4B4;
        margin-bottom: 1.5rem;
    `,
    
    HeaderWrap : styled('div')`
        text-align: center;
    `,
    
    ContentWrap : styled('div')`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `,
    FieldWrapper: styled('div')`
        margin: 1.5rem 0;
    `,
    FieldName: styled('div')`
        color: #B4B4B4;
        font-size: 1.25rem;
        font-family: 'Helvetica Neue';
        margin-bottom: 0.75rem;
        text-align: left;
    `,

    FieldValue: styled('div')`
        color: #FFFFFF;
        font-size: 1rem;
        font-family: 'Helvetica Neue';
        margin-bottom: 1.5rem;
    `,
    RowFlex: styled('div')`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 1.5rem 0;
    `,
    FieldRowName: styled('div')`
        color: #B4B4B4;
        font-size: 1.25rem;
        font-family: 'Helvetica Neue';
    `,

    FieldRowValue: styled('div')`
        color: #FFFFFF;
        font-size: 1rem;
        font-family: 'Helvetica Neue';
    `,
    ButtonDivWrap: styled('div')`
        margin-top: 1.2rem;
        width: 100%;
    `,
    ButtonDiv: styled('div')`
        margin-top: 1rem;
        width: 100%;
    `,
}